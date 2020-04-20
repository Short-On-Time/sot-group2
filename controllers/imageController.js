import mongoose from 'mongoose';
import Image from '../models/ImageModel.js';
import config from '../config/config.js';

let db;
function initMongoose() {
  mongoose.connect(config.db.uri, {useNewUrlParser: true});
  db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

export const addImage = async (req, res) => {
	initMongoose()
	let save_image
	save_image = new Image ({
		name: req.body.name,
		imageBuffer: req.file.buffer,
		mimeType: req.file.mimetype
	});
	save_image.save(function (err, data) {
    if(err) {
      return res.status(400).json(err);
    } else {
      console.log('saved =>', data.name);
			res.status(200).type(data.mimeType).send(data.imageBuffer);
    }
	});
	//console.log(req.body.name);
	//res.status(200).type(req.file.mimetype).send(req.file.buffer);
}

export const getImage = async (req, res) => {
	const name = req.params.name;
	initMongoose()
	Image.findOne({name: name}, (err, data) => {
		if(!data) {
      res.status(400).json({
        message: 'Image does not exist!',
      });
    } else {
			res.status(200).type(data.mimeType).send(data.imageBuffer);
    }
	});
}

export const getImageList = async (req, res) => {
	initMongoose()
	Image.find({}, (err, data) => {
		var names = data.map(d => {
			return {
				name: d.name,
				id: d.id
			}
		});
		res.status(200).json(names);
	});
}

export const deleteImage = async (req, res) => {
	const name = req.params.name;
	initMongoose()
	Image.findOneAndDelete({name: name}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'Image does not exist!',
      });
    } else {
			res.status(200).type(data.mimeType).send(data.imageBuffer);
    }
  });
}

export const getImageID = async (req, res) => {
	const id = req.params.id;
	initMongoose()
	Image.findOne({_id: id}, (err, data) => {
		if(!data) {
      res.status(400).json({
        message: 'Image does not exist!',
      });
    } else {
			res.status(200).type(data.mimeType).send(data.imageBuffer);
    }
	});
}