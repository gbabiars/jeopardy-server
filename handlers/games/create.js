var _ = require('lodash'),
    serialize = require('../../serializers/game');

function createTile(board, position) {

    var tile = {};

    tile.question = '';
    tile.answer = '';
    tile.value = board.round * (position + 1) * 100;
    tile.position = position;

    return tile;

}

function createCategory(board, position) {

    var category = {};

    category.title = '';
    category.position = position;

    category.tiles = _.range(5).map(function(index) {
        return createTile(board, index);
    });

    return category;

}

function createBoard(round) {

    var board = {};

    board.title = 'Round ' + round;
    board.round = round;
    board.categories = _.range(6).map(function(index) {

        return createCategory(board, index);
    });

    return board;

}

module.exports = function(req, reply) {

    var game = req.payload.game,
        gamesCollection = req.server.app.db.collection('games');

    game.finalQuestion = '';
    game.finalAnswer = '';

    game.boards = _.range(2).map(function(index) {
        return createBoard(index + 1);
    });

    gamesCollection.insert(game, { w: 1 }, function() {
        reply({ game: serialize(game) }).code(201);
    });

};