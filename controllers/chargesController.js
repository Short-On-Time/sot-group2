import mongoose from 'mongoose';
import User from '../models/UserModel.js';
import Charge from '../models/ChargeModel.js';
import config from '../config/config.js';
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Stripe from 'stripe';
const stripe = new Stripe('sk_test_cI3u2JMXdPaFHsjxdHRuleLo005EtmkfsL');

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
      "is_premium": user.is_premium,
      "is_admin": user.is_admin,
    }
  }
}

export const charge = async (req, res) => {
  // initMongoose()
  try {
    stripe.charges.create({
      source: req.body.token.id,
      amount: req.body.amount * 100,
      currency: "usd"
    })
    .then(() => res.send({code: 200}))
    .catch(err => console.log(err));
  } catch (err) {
    res.send(err);
  }
};

export const addChargeType = async (req, res) => {
  initMongoose()
  let save_charge
  save_charge = new Charge({
    type: req.body.type,
    amount: req.body.amount
  })
  save_charge.save(function (err, save_charge) {
    if(err) {
      return res.status(400).json(err);
    } else {
      console.log('saved =>', save_charge);
      return res.status(200).json(save_charge);
    }
  });
}


export const changeChargeType = async (req, res) => {
  // initMongoose()
  let type = req.body.type
  let amount = req.body.amount
  Charge.findOneAndUpdate({type: type}, {$set: { amount: amount }}, (err, data) => {
    console.log(err);
    console.log(data);
    if(!data) {
      res.status(400).json({
        message: `Error changing amount type`,
      });
    } else {
      res.status(200).json(data);
    }
  });
};


export const getChargeType = async (req, res) => {
  initMongoose()
  let type = req.params.type
  Charge.findOne({type: type}, (err, data) => {
    if(!data) {
      console.log(err);
      res.status(400).json({
        message: 'Type does not exist!',
      });
    } else {
      res.status(200).json(data);
    }
  });
};
