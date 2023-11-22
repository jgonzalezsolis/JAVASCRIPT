const JokesController = require('../controllers/jokes.controller');

module.exports = app => {
    app.get('/api/jokes', JokesController.allTheJokes);
    app.get('/api/jokes/:id', JokesController.getOneJoke);
    app.post('/api/jokes', JokesController.createNewJoke);
    app.patch('/api/jokes/:id', JokesController.editJoke);
    app.delete('/api/jokes/:id', JokesController.deleteJoke);
}