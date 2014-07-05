var ObjectID = require('mongodb').ObjectID,
    serialize = require('../../serializers/game');

module.exports = function(req, reply) {

    var game = req.payload.game,
        gamesCollection = req.server.app.db.collection('games'),
        id = req.params.id;

    delete game.id;

    game.boards.forEach(function(board) {

        delete board.id;

        board.categories.forEach(function(category) {

            delete category.id;

            category.tiles.forEach(function(tile) {

                delete tile.id;

            });

        });

    });

    gamesCollection.update({ _id: new ObjectID(id) }, { $set: game }, { w: 1 }, function() {

        game._id = id;
        reply({ game: serialize(game) });

    });

};