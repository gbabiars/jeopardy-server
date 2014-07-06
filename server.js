var Hapi = require('hapi');
//    MongoClient = require('mongodb').MongoClient;

var port = parseInt(process.env.PORT) || 8000;
var host = '0.0.0.0';

var server = Hapi.createServer(host, port, { cors: true });

//var connectionString = process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/jeopardy';
//
//MongoClient.connect(connectionString, function(err, db) {
//    if(err) {
//        throw err;
//    }
//
//    server.app.db = db;
//    console.log('Connected to Mongo');
//});

server.route(require('./routes'));

server.start(function() {
    console.log('Server started @ ' + server.info.uri);
});