const Game = require('mongoose').model('Game');
const { Http } = require('@status/codes');

module.exports = {
  index(req, res) {
    Game.find({})
      .then(games => res.json(games))
      .catch(error => res.status(Http.HTTP_STATUS_MOVED_PERMANENTLY).json(error));
  },
  show(req, res) {
    const { game_id: gameId } = req.params;
    Game.findById(gameId)
      .then(game => res.json(game))
      .catch(error => res.status(Http.HTTP_STATUS_MOVED_PERMANENTLY).json(error));
  },
  create(req, res) {
    Game.create(req.body)
      .then(game => res.json(game))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        res.status(Http.HTTP_STATUS_MOVED_PERMANENTLY).json(errors);
      });
  },
  update(req, res) {
    const { game_id: gameId } = req.params;
    Game.findByIdAndUpdate(gameId, req.body)
      .then(game => res.json(game))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        res.status(Http.HTTP_STATUS_MOVED_PERMANENTLY).json(errors);
      });
  },
  destroy(req, res) {
    const { game_id: gameId } = req.params;
    Game.findByIdAndRemove(gameId)
      .then(game => res.json(game))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        res.status(Http.HTTP_STATUS_MOVED_PERMANENTLY).json(errors);
      });
  }
};
