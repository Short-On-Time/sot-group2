/* Dependencies */
import mongoose from 'mongoose';
import Product from '../models/ProductModel.js';
import Glossary from '../models/GlossaryModel.js';
import Recipe from '../models/RecipeModel.js';
import User from '../models/UserModel.js';
import config from '../config/config.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

function initMongoose() {
  mongoose.connect(config.db.uri, {useNewUrlParser: true});
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
}

export const addProduct = async (req, res) => {
  initMongoose()
  let save_product
  save_product = new Product({
    name: req.body.name,
    ailment: req.body.ailment,
    body_part: req.body.body_part,
    description: req.body.description,
    is_premium: req.body.is_premium,
    is_published: req.body.is_published,
  });
  save_product.save(function (err, save_product) {
    if(err) {
      return res.status(400).json(err);
    } else {
      console.log('saved =>', save_product);
      return res.status(200).json(save_product);
    }
  });
};

export const updateProduct = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Product.findOneAndUpdate({_id: id}, req.body, {new: true} ,(err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if (!data) {
      res.status(500).json({
        message: "Product does not exist!"
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getProduct = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Product.findOne({_id: id}, (err, data) => {
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
  Product.find({}, (err, data) => {
    res.status(200).json(data);
  });
};

export const deleteProduct = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Product.findOneAndDelete({_id: id}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'Product does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const addRecipe = async (req, res) => {
  initMongoose()
  let save_recipe
  save_recipe = new Recipe({
    name: req.body.name,
    ingredients: req.body.ingredients,
    amount: req.body.amount,
    units: req.body.units,
    description: req.body.description,
    is_premium: req.body.is_premium,
    is_published: req.body.is_published
  });
  save_recipe.save(function (err, save_recipe) {
    if(err) {
      return res.status(400).json(err);
    } else {
      console.log('saved =>', save_recipe);
      return res.status(200).json(save_recipe);
    }
  });
};

export const updateRecipe = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Recipe.findOneAndUpdate({_id: id}, req.body, {new: true} ,(err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if (!data) {
      res.status(500).json({
        message: "Recipe does not exist!"
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getRecipe = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Recipe.findOne({_id: id}, (err, data) => {
    if(!data) {
      res.status(400).json({
        message: 'Recipe does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

export const getRecipeList = async (req, res) => {
  initMongoose()
  Recipe.find({}, (err, data) => {
    res.status(200).json(data);
  });
};

export const deleteRecipe = async (req, res) => {
  initMongoose()
  const id = req.params.id;
  Recipe.findOneAndDelete({_id: id}, (err, data) => {
    if(err) {
      res.status(400).json({err});
      throw err;
    } else if(!data) {
      res.status(400).json({
        message: 'Recipe does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};

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
