var ObjectID = require('mongodb').ObjectID,
    serialize = require('../../serializers/game');

module.exports = function(req, reply) {

    var gamesCollection = req.server.app.db.collection('games'),
        id = req.params.id;

    gamesCollection.findOne({ _id: new ObjectID(id) }, function(err, game) {

        reply({ game: serialize(game) });

    });

};