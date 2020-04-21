import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import Glossary from '../models/GlossaryModel.js';
import Blog from '../models/BlogModel.js';
import Remedy from '../models/RemedyModel.js';
import Contact from '../models/ContactModel.js';
import config from '../config/config.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function initMongoose() {
  mongoose.connect(config.db.uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

function signJWT(payload, res) {
  jwt.sign(payload, "herbs", { expiresIn: 360000 }, (err, token) => {
      if (err) {
        console.log("JWT error signing", err);
        throw err;
      }
      res.status(200).json({
        token
      });
    }
  );
}

function buildPayload(user) {
  return {
    user_info: {
			username: user.username,
      id: user.id,
      email: user.email,
      is_premium: user.is_premium,
      is_admin: user.is_admin
    }
  }
}

export const signup = async (req, res) => {
  initMongoose()
  let save_user
  save_user = new User({
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    is_admin: req.body.is_admin,
    is_premium: req.body.is_premium
  });

  const salt = await bcrypt.genSalt(10);
  save_user.password = await bcrypt.hash(req.body.password, salt);
  save_user.save(function (err, save_user) {
    console.log('saved =>', save_user);
    console.log('err =>', err);
  });

  const payload = buildPayload(save_user)
  signJWT(payload, res)
};

export const signin = async (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let user = await User.findOne({
    email
  });
  if (!user) {
    return res.status(400).json({
      message: "User does not exist!"
    });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({
      message: "Incorrect password!"
    });
  }
  const payload = buildPayload(user)
  console.log(payload);
  signJWT(payload, res)
};

//clean remedy
function cleanRemedyPreview(remedy) {
	remedy.ingredients = null;
	remedy.amounts = null;
	remedy.units = null;
	remedy.description = null;
	return remedy;
}

export const getRemedyPreview = async (req, res) => {
  initMongoose()
  const name = req.params.name;
  Remedy.findOne({name: name, is_published: true}, (err, data) => {
    if(!data) {
      res.status(400).json({
        message: 'Remedy does not exist!',
      });
    } else {
			data = cleanRemedyPreview(data);
      res.status(200).json(data);
    }
  });
};

export const getRemedyPreviewList = async (req, res) => {
  initMongoose()
  Remedy.find({is_published: true}, (err, data) => {
		var cleanedData = [];
		data.forEach(remedy => cleanedData.push(cleanRemedyPreview(remedy)));
    res.status(200).json(data);
  });
};

export const getRemedyFull = async (req, res) => {
  initMongoose()
  const name = req.params.name;
  Remedy.findOne({name: name, is_published: true}, (err, data) => {
    if(!data) {
      res.status(400).json({
        message: 'Remedy does not exist!',
      });
    } else {
      /*if(data.is_premium) {
        res.status(403).json({
          message: 'Remedy is premium!'
        });
      } else {*/
        res.status(200).json(data);
      //}
    }
  });
};

export const getRemedyFullList = async (req, res) => {
  initMongoose()
  Remedy.find({is_published: true}, (err, data) => {
    res.status(200).json(data);
  });
};

export const getGlossary = async (req, res) => {
  initMongoose()
  const title = req.params.title;
  Glossary.findOne({title: title, is_published: true}, (err, data) => {
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
  Glossary.find({is_published: true}, (err, data) => {
    res.status(200).json(data);
  });
};

export const contact = async (req, res) => {
  initMongoose()
  let save_contact
  save_contact = new Contact({
    email: req.body.email,
    body: req.body.body
  });

  save_contact.save(function (err, save_contact) {
    if (!err) {
      console.log('saved =>', save_contact);
      res.status(200).json(save_contact);
    } else {
      console.log('err =>', err);
      res.status(400).json(err)
    }
  });

};

export const userPremium = async (req, res) => {
  initMongoose()
  const email = req.params.email;
  User.findOneAndUpdate({email: email}, {$set: { is_premium: true }}, (err, data) => {
    console.log(err);
    console.log(data);
    if(!data) {
      res.status(400).json({
        message: `Error setting user to premium: ${err}`,
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getBlogNewest = async (req, res) => {
	initMongoose()
	Blog.find({}, (err, data) => {
			let NewestPost = {createdAt: new Date(0)};
			data.forEach( post => {
				if(post.createdAt > NewestPost.createdAt){
					NewestPost = post;
				}
			})
			res.status(200).json(NewestPost);
	});
};

export const getBlog = async (req, res) => {
	initMongoose()
	Blog.find({_id: req.params.id}, (err, data) => {
		res.status(200).json(data[0]);
	});
};

export const getBlogPrevious = async (req, res) => {
	initMongoose()
	let currentPost;
	let prevPost = {createdAt: new Date(0)};
	Blog.find({_id: req.params.id}, (err, data) => {
		currentPost = data[0];
		Blog.find({}, (err, data) => {
			data.forEach( post => {
				if(post.createdAt > prevPost.createdAt && post.createdAt < currentPost.createdAt){
					prevPost = post
				}
			})


			if(prevPost.createdAt > new Date(0)){
				res.status(200).json(prevPost);
			}
			else{
				res.status(200).json(currentPost);
			}
		});
	});
};

export const getBlogNext = async (req, res) => {
	initMongoose()
	let currentPost;
	let nextPost = {createdAt: new Date(8640000000000000)};
	Blog.find({_id: req.params.id}, (err, data) => {
		currentPost = data[0];

		Blog.find({}, (err, data) => {
			data.forEach( post => {
				if(post.createdAt < nextPost.createdAt && post.createdAt > currentPost.createdAt){
					nextPost = post;
				}
			})

			if(nextPost.createdAt < new Date(8640000000000000)){
				res.status(200).json(nextPost);
			}
			else{
				res.status(200).json(currentPost);
			}
		});

	});
};


export const viewSelf = async (req, res)=> {
  initMongoose()
  const email= req.params.email
  User.findOne({email:email}, (err,data) =>{
    console.log(data)
    if (err){
      res.status(400).json({err});
      throw err;
    }
    else if(!data){
      res.status(400).json({
        message: `Error deleting user: ${err}`
      });
    } else {
      res.status(200).json(data);
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
export const editSelf = async (req, res) => {
  initMongoose()
  const id = req.params.id;

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

export const deleteSelf = async (req, res)=> {
  initMongoose()
  const email= req.params.email
  User.findOneAndDelete({email:email}, (err,data) =>{
    console.log(data)
    if (err){
      res.status(400).json({err});
      throw err;
    }
    else if(!data){
      res.status(400).json({
        message: `Error deleting user: ${err}`
      });
    } else {
      res.status(200).json(data);
    }
  });
};
