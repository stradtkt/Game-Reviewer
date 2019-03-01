const { gameController } = require('../controllers');
const router = require('express').Router();

module.exports = router
  .get('/', gameController.index)
  .create('/', gameController.create)
  .put('/:game_id', gameController.update)
  .get('/:game_id', gameController.show)
  .delete('/:game_id', gameController.destroy);

