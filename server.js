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
import cors from 'cors';

//connect to database
mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false}).then(() => {
    console.log(`Successfully connected to mongoose database.`)
});

//initialize app
const app = express();

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

app.all('/*', (req, res) => {
    // res.status(201).json({message: "nothing here!"});
    res.sendFile(path.resolve("./client/build/index.html"));
});
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`App now listening on port ${PORT}`));
