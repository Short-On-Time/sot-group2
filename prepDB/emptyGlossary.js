import mongoose from 'mongoose';
import GlossaryModel from '../models/GlossaryModel.js';
import config from '../config/config.js';

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
GlossaryModel.deleteMany({}, (err) => {
		if (err) throw err;
		else{
			mongoose.connection.close();
			console.log("emptied Glossary");
		}
});
