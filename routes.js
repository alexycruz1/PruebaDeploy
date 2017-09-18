var socksController = require('./controllers/socksController');
var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');

exports.endpoints = [{ method: 'GET', path: '/', config: { handler: function (request, reply) { reply('API v1, socks') } } },
{ method: 'GET', path: '/v1/socks', config: socksController.getSocks },
{ method: 'POST', path: '/v1/socks', config: socksController.createSock },
{ method: 'PUT', path: '/v1/socks', config: socksController.editSock },

{ method: 'GET', path: '/v1/socks/getByName/{name}', config: socksController.getByName },
{ method: 'GET', path: '/v1/socks/getByBrand/{brand}', config: socksController.getByBrand },
{ method: 'GET', path: '/v1/socks/getByColor/{color}', config: socksController.getByColor },
{ method: 'GET', path: '/v1/socks/getBySize/{size}', config: socksController.getBySize },
{ method: 'GET', path: '/v1/socks/getByType/{type}', config: socksController.getByType },
{ method: 'GET', path: '/v1/socks/getByPattern/{pattern}', config: socksController.getByPattern },
{ method: 'GET', path: '/v1/socks/getBySex/{sex}', config: socksController.getBySex },
{ method: 'GET', path: '/v1/socks/getByPrice/{price}', config: socksController.getByPrice },

{ method: 'DELETE', path: '/v1/socks/deleteByName/{name}', config: socksController.deleteByName },

{ method: 'POST', path: '/v1/register', config: usersController.createUser },
{method: 'GET', path: '/v1/logout', config: authController.logout},
{ method: 'POST', path: '/v1/login', config: authController.login }
];