const mongoose = require("mongoose");

const jokeSchema = new mongoose.Schema({
  lineup: {type: String},
  punchline: {type: String}
}, {timestamps:true})

const Joke = mongoose.model('Joke', jokeSchema);

module.exports = Joke;