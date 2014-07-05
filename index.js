var Hapi = require('Hapi'),
    MongoClient = require('mongodb').MongoClient;

var server = Hapi.createServer('localhost', 8000, { cors: true });

MongoClient.connect('mongodb://127.0.0.1:27017/jeopardy', function(err, db) {
    if(err) {
        throw err;
    }

    server.app.db = db;
});

server.start();