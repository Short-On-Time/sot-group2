import mongoose from 'mongoose';
import RemedyModel from '../models/RemedyModel.js';
import config from '../config/config.js';

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
RemedyModel.deleteMany({}, (err) => {
	if (err) throw err;
	else {
		mongoose.connection.close();
		console.log("emptied Recipes");
	}
});
