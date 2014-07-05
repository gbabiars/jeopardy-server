var serialize = require('../../serializers/game');

module.exports = function(req, reply) {

    var gamesCollection = req.server.app.db.collection('games');

    gamesCollection.find({}).toArray(function(err, games) {

        reply({ games: games.map(serialize) });

    });

};