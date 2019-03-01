const mongoose = require('mongoose');

const { Schema } = mongoose;

const GameSchema = new Schema({
  title: String,
  company: String,
  cover: String,
  price: {
    type: Number,
    precision: 2,
    max: 99.99,
    min: 9.99
  },
  release: {
    type: Date,
    min: Date.now() - 100000000,
    max: Date.now()
  }
});

module.exports = mongoose.model("Game", GameSchema);
