import sqreen from 'sqreen';
import path from 'path';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js';
import usersRouter from './routes/usersRouter.js';
import adminRouter from './routes/adminRouter.js';
import chargesRouter from './routes/chargesRouter.js';
//import forumRouter from './routes/forumRouter.js';
import cors from 'cors';
import Sentry from '@sentry/node';

Sentry.init({ dsn: 'https://6b0b414cfb644321982e20ed8319e634@o375820.ingest.sentry.io/5195824' });

// The request handler must be the first middleware on the app

//connect to database
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});

//initialize app
const app = express();

app.use(Sentry.Handlers.requestHandler());

//enable request logging for development debugging
app.use(morgan('dev'));

//body parsing middleware
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

/* serve static files - see http://expressjs.com/en/starter/static-files.html */
app.use('/', express.static('./client/build'));
app.use(express.static('./client/build'))

//https://enable-cors.org/server_expressjs.html
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3001"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(cors());


app.use('/api/users/', usersRouter);
app.use('/api/admin/', adminRouter);
app.use('/api/stripe/', chargesRouter);
//app.use('/api/forum/', forumRouter);

app.use(Sentry.Handlers.errorHandler());

app.all('/*', (req, res) => {
    // res.status(201).json({message: "nothing here!"});
    res.sendFile(path.resolve("./client/build/index.html"));
});

app.use(function onError(err, req, res, next) {
  // The error id is attached to `res.sentry` to be returned
  // and optionally displayed to the user for support.
  res.statusCode = 500;
  res.end(res.sentry + "\n");
});


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));
