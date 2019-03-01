const gameRouter = require('game.route');
const router = require('express').Router();

module.exports = router.use('/games', gameRouter);
