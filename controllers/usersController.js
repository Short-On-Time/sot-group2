import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import Glossary from '../models/GlossaryModel.js';
import Product from '../models/ProductModel.js';
import Recipe from '../models/RecipeModel.js';
import config from '../config/config.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function initMongoose() {
  mongoose.connect(config.db.uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

function signJWT(payload, res) {
  jwt.sign(payload, "herbs", { expiresIn: 3600 }, (err, token) => {
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
    user: {
      id: user.id,
      "is_premium": false,
      "is_admin": false
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
    is_admin: false,
    is_premium: false
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
  signJWT(payload, res)
};

export const getProduct = async (req, res) => {
  initMongoose()
  const name = req.params.name;
  Product.findOne({name: name, is_published: true}, (err, data) => {
    if(!data) {
      res.status(400).json({
        message: 'Product does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getProductList = async (req, res) => {
  initMongoose()
  Product.find({is_published: true}, (err, data) => {
    res.status(200).json(data);
  });
};

export const getRecipe = async (req, res) => {
  initMongoose()
  const name = req.params.name;
  Recipe.findOne({name: name, is_published: true}, (err, data) => {
    if(!data) {
      res.status(400).json({
        message: 'Glossary does not exist!',
      });
    } else {
      if(data.is_premium) {
        res.status(403).json({
          message: 'Recipe is premium!'
        });
      } else {
        res.status(200).json(data);
      }
    }
  });
};

export const getRecipeList = async (req, res) => {
  initMongoose()
  Recipe.find({is_published: true, is_premium: false}, (err, data) => {
    res.status(200).json({err: err, data: data});
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
