const mongoose = require("mongoose");
const db = "JokeDB";

mongoose.connect(`mongodb://localhost/${db}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("Connected to API Server."))
  .catch(err => console.error('Something went wrong', err));