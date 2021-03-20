const jokeController = require("../controllers/joke.controller");
 
module.exports = app => {
    app.get('/api/jokes', jokeController.all);
    app.get('/api/jokes/:id', jokeController.single);
    app.put('/api/jokes/:id', jokeController.update);
    app.post('/api/jokes/new', jokeController.create);
    app.delete('/api/jokes/:id', jokeController.delete);
}