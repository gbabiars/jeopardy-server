module.exports = function(game) {
    game.id = game._id;
    delete game._id;

    game.boards.forEach(function(board) {

        board.id = game.id + '-' + board.round;

        board.categories.forEach(function(category) {

            category.id = board.id + '-' + category.position;

            category.tiles.forEach(function(tile) {
                tile.id = category.id + '-' + tile.position;
            });

        });

    });

    return game;
};