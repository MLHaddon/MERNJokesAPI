const Joke = require("../models/joke.model");

module.exports = {
  all : (req, res) => {
    Joke.find(req.params)
      .then(allTheJokes => res.json({Jokes: allTheJokes}))
      .catch(err => res.json({ message: "Something went wrong with the response.", error: err}));
  },
  single : (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then(oneSingleJoke => res.json({ Joke: oneSingleJoke }))
      .catch(err => res.json({ message: 'Something went wrong with the response.', error: err }));
  },
  create : (req, res) => {
    Joke.create(req.body)
      .then(newlyCreatedJoke => res.json({ Joke: newlyCreatedJoke }))
      .catch(err => res.json({ message: 'Something went wrong with the response.', error: err }));
  },
  update : (req, res) => {
    Joke.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true, runValidators: true }
  )
      .then(updatedJoke => res.json({ Joke: updatedJoke }))
      .catch(err => res.json({ message: 'Something went wrong with the response.', error: err }));
  },
  delete : (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: 'Something went wrong with the response.', error: err }));
  }
}