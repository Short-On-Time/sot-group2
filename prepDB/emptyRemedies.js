import mongoose from 'mongoose';
import RecipeModel from '../models/RecipeModel.js';
import RemedyModel from '../models/RemedyModel.js';
import config from '../config/config.js';

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
RecipeModel.deleteMany({}, (err) => {
    if (err) throw err;
});
RemedyModel.deleteMany({}, (err) => {
	if (err) throw err;
});
mongoose.connection.close();
console.log("emptied Recipes");