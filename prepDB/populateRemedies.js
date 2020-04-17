import * as fs from 'fs'; 
import mongoose from 'mongoose';
import RemedyModel from '../models/RemedyModel.js';
import config from '../config/config.js';
import fastcsv from 'fast-csv';

mongoose.connect(config.db.uri, {useNewUrlParser: true, useUnifiedTopology: true});

var stream=fs.createReadStream('Consider_Herbs_Recipes.csv');
let remedyList=[];
console.log('Parsing!');
let csvStream=fastcsv
	.parse()
	.on('data', function(data){
		//grab data
		var ailment = data[1];
		var bodyPart = data[2];
		var name = data[3];
		var ingredient = data[4];
		var amount = data[5];
		var unit = data[6];
		var description = data[7];

		//console.log(`${ailment}\t${bodyPart}\t${name}\t${ingredient}\t${amount}\t${units}\t${description}`);
		if(ailment=='') {//ingredient row
			if(unit=='') unit = ' '; //fix missing units in some variables

			remedyList[remedyList.length - 1].ingredients.push(ingredient);
			remedyList[remedyList.length - 1].amounts.push(amount);
			remedyList[remedyList.length - 1].units.push(unit);
		} else { //new entry
			//fix missing variables that somehow show up
			var canPublish = true;
			if(name=='') {
				name='MISSING NAME';
				canPublish=false;
			}
			if(ailment=='') {
				ailment='MISSING AILMENT';
				canPublish=false;
			}
			if(bodyPart=='') {
				bodyPart='MISSING BODY PART';
				canPublish=false;
			}
			if(description=='') {
				description='MISSING DESCRIPTION';
				canPublish=false;
			}

			//make mongoDB entry and push to list
			var remedyEntry =new RemedyModel({
				name: name,
				ailment_type: ailment,
				body_part: bodyPart,
				ingredients: [ingredient],
				amounts: [amount],
				units: [unit],
				description: description,
				is_published: canPublish,
			});
			remedyList.push(remedyEntry);
		}
	})
	.on('end', function(){
		remedyList.shift();//remove first entry
		remedyList.splice(-1);//remove last entry
		//console.log(remedyList);
		RemedyModel.insertMany(remedyList, (err, data) =>{
				if (err) {
					console.log(data);
				}
				else{
					mongoose.connection.close();
					console.log(`Populated Remedies with ${remedyList.length} entries!`);
				}
		});
	});

stream.pipe(csvStream);