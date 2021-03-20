const express = require('express'),
  app = express(),
  cors = require('cors'),
  port = 8000,
  server = app.listen(port, () => {console.log(`Listening on port: ${port}`)});
  

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
  
require("./server/config/mongoose.config");
require("./server/routes/joke.routes")(app);