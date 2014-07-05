var ObjectID = require('mongodb').ObjectID;

module.exports = function(req, reply) {

    var gamesCollection = req.server.app.db.collection('games'),
        id = req.params.id;

    gamesCollection.remove({ _id: new ObjectID(id) }, { w: 1 }, function() {

        reply().code(204);

    });

};