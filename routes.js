var routes = [];

routes.push({
    method: 'GET',
    path: '/',
    handler: function(req, reply) {
        reply('This is Jeopardy');
    }
});

routes.push({
    method: 'GET',
    path: '/api/games',
    handler: require('./handlers/games/find')
});

routes.push({
    method: 'POST',
    path: '/api/games',
    handler: require('./handlers/games/create')
});

routes.push({
    method: 'GET',
    path: '/api/games/{id}',
    handler: require('./handlers/games/find_by_id')
});

routes.push({
    method: 'PUT',
    path: '/api/games/{id}',
    handler: require('./handlers/games/update')
});

routes.push({
    method: 'DELETE',
    path: '/api/games/{id}',
    handler: require('./handlers/games/destroy')
});

module.exports = routes;