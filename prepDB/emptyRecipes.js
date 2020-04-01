import mongoose from 'mongoose';
import RecipeModel from '../models/RecipeModel.js';
import config from '../config/config.js';

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});
RecipeModel.deleteMany({}, (err) => {
    if (err) throw err;
});

console.log("emptied Recipes");