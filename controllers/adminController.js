/* Dependencies */
import mongoose from 'mongoose';
import Remedy from '../models/RemedyModel.js';
import Glossary from '../models/GlossaryModel.js';
import User from '../models/UserModel.js';
import config from '../config/config.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function initMongoose() {
  mongoose.connect(config.db.uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

export const addRemedy = async (req, res) => {
  initMongoose()
  let save_remedy
  save_remedy = new Remedy({
    name: req.body.name,
		ailment_type: req.body.ailment_type,
    body_part: req.body.body_part,
		description: req.body.description,

		ingredients: req.body.ingredients,
		amounts: req.body.amounts,
		units: req.body.units,
		
    is_premium: req.body.is_premium,
		is_published: req.body.is_published,
		is_free_trial: req.body.is_free_trial
  });
  save_remedy.save(function (err, save_remedy) {
    if(err) {
      return res.status(400).json(err);
    } else {
      console.log('saved =>', save_remedy);
      return res.status(200).json(save_remedy);
    }
  });
};

export const updateRemedy = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Remedy.findOneAndUpdate({_id: id}, req.body, {new: true} ,(err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if (!data) {
      res.status(500).json({
        message: "Remedy does not exist!"
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getRemedy = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Remedy.findOne({_id: id}, (err, data) => {
    if(!data) {
      res.status(400).json({
        message: 'Remedy does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getRemedyList = async (req, res) => {
  initMongoose()
  Remedy.find({}, (err, data) => {
    res.status(200).json(data);
  });
};

export const deleteRemedy = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Remedy.findOneAndDelete({_id: id}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'Remedy does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const free_trial = async (req, res) => {
	initMongoose();
	var allUpdates = [];
	if(req.body.reset_all) {
		Remedy.updateMany({is_free_trial: true}, {is_free_trial: false}, (err, data) => {
			if(err) {
				res.status(400).json({err});
				throw err;
			} else {
				allUpdates.push(data);
			}
		});
	};
	Remedy.updateMany({body_part: req.body.body_part}, {is_free_trial: req.body.is_free_trial}, (err, data) => {
		if(err) {
			res.status(400).json({err});
			throw err;
		} else {
			allUpdates.push(data);
			res.status(200).json(allUpdates);
		}
	});
}

export const addGlossary = async (req, res) => {
  initMongoose()
  let save_glossary
  save_glossary = new Glossary({
    title: req.body.title,
    definition: req.body.definition,
    usage: req.body.usage,
    ingredients: req.body.ingredients,
    is_published: req.body.is_published,
  });
  save_glossary.save(function (err, save_glossary) {
    if(err) {
      return res.status(400).json(err);
    } else {
      console.log('saved =>', save_glossary);
      return res.status(200).json(save_glossary);
    }
  });
};

export const updateGlossary = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Glossary.findOneAndUpdate({_id: id}, req.body, {new: true}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'Glossary does not exist!',
      });
    } else {
      res.status(200).json(data)
    }
  });
};

export const getGlossary = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Glossary.findOne({_id: id}, (err, data) => {
    if(!data) {
      res.status(400).json({
        message: 'Glossary does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getGlossaryList = async (req, res) => {
  initMongoose()
  Glossary.find({}, (err, data) => {
    res.status(200).json(data);
  });
};

export const deleteGlossary = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Glossary.findOneAndDelete({_id: id}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'Glossary does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const addUser = async (req, res) => {
  initMongoose()
  let save_user
  save_user = new User({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    is_admin: req.body.is_admin,
    is_premium: req.body.is_premium,
  });

  //actually salt the password LOL
  const salt = await bcrypt.genSalt(10);
  save_user.password = await bcrypt.hash(req.body.password, salt);

  save_user.save(function (err, save_user) {
    if(err) {
      return res.status(400).json(err);
    } else {
      console.log('saved =>', save_user);
      return res.status(200).json(save_user);
    }
  });
};

export const updateUser = async (req, res) => {
  initMongoose()
  const id = req.params.id;

  //check to see if password was changed
  if(req.body.password) {
    const salt = await bcrypt.genSalt(10);
    req.body.password = await bcrypt.hash(req.body.password, salt);
  }

  User.findOneAndUpdate({_id: id}, req.body, {new: true}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'User does not exist!',
      });
    } else {
      res.status(200).json(data)
    }
  });
};

export const getUser = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  User.findOne({_id: id}, (err, data) => {
    if(!data) {
      res.status(400).json({
        message: 'User does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getUserList = async (req, res) => {
  initMongoose()
  User.find({}, (err, data) => {
    res.status(200).json(data);
  });
};

export const deleteUser = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  User.findOneAndDelete({_id: id}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'User does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};
