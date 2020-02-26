/* Dependencies */
import mongoose from 'mongoose';
import Product from '../models/ProductModel.js';
import config from '../config/config.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Glossary from '../models/GlossaryModel.js';

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
    description: req.body.description,
    for_premium: req.body.for_premium,
    published: req.body.published,
  });
  save_product.save(function (err, save_product) {
    console.log('saved =>', save_product);
  });
};

export const addGlossary = async (req, res) => {
  initMongoose()
  let save_glossary
  save_glossary = new Glossary({
    title: req.body.title,
    definition: req.body.definition,
    usage: req.body.usage,
    published: req.body.published,
  });
  save_glossary.save(funciton (err, save_glossary) {
    console.log('saved =>', save_glossary);
  });
}