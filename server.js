var Hapi = require('Hapi'),
    MongoClient = require('mongodb').MongoClient;

var port = process.env.PORT || 8000;
var host = process.env.HOST || 'localhost';

var server = Hapi.createServer(host, port, { cors: true });

var connectionString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jeopardy';

MongoClient.connect(connectionString, function(err, db) {
    if(err) {
        throw err;
    }

    server.app.db = db;
});

server.route(require('./routes'));

server.start(function() {
    console.log('Server started @ ' + server.info.uri);
});