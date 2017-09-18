var sock = require('../schemas/sock');

exports.getSocks = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        var socks = sock.find({});
        reply(socks);
    }
}

exports.createSock = {
    auth: {
        mode: 'required',
        strategy: 'session',
        scope: ['admin']
    },
    handler: function (request, reply) {
        var newSock = new sock({
            name: request.payload.name,
            brand: request.payload.brand,
            color: request.payload.color,
            size: request.payload.size,
            type: request.payload.type,
            pattern: request.payload.pattern,
            sex: request.payload.sex,
            price: request.payload.price
        });
        newSock.save();
        return reply('created');
    }
}

exports.getByName = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        var sockByName = sock.find({ name: request.params.name });
        reply(sockByName);
    }
}

exports.getByBrand = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        var sockByBrand = sock.find({ brand: request.params.brand });
        reply(sockBybrand);
    }
}

exports.getByColor = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        var sockByColor = sock.find({ color: request.params.color });
        reply(sockByColor);
    }
}

exports.getBySize = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        var sockBySize = sock.find({ size: request.params.size });
        reply(sockBySize);
    }
}

exports.getByType = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        var sockByType = sock.find({ type: request.params.type });
        reply(sockByType);
    }
}

exports.getByPattern = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        var sockByPattern = sock.find({ pattern: request.params.pattern });
        reply(sockByPattern);
    }
}

exports.getBySex = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        var sockBySex = sock.find({ sex: request.params.sex });
        reply(sockBySex);
    }
}

exports.getByPrice = {
    auth: {
        mode:'required',
        strategy:'session',
        scope: ['admin', 'regular']
      },
    handler: function (request, reply) {
        var sockByPrice = sock.find({ price: request.params.price });
        reply(sockByPrice);
    }
}

exports.deleteByName = {
    auth: {
        mode: 'required',
        strategy: 'session',
        scope: ['admin']
    },
    handler: function (request, reply) {
        var sockByName = sock.findOne({ name: request.params.name });
        sockByName.remove(function (err) {
            if (err) {
                reply('not deleted');
            } else {
                reply('deleted');
            }
        })
    }
}

exports.editSock = {
    auth: {
        mode: 'required',
        strategy: 'session',
        scope: ['admin']
    },
    handler: function (request, reply) {
        var editSock = sock.find({ name: request.query.name });
        editSock.update({ $set: request.payload }, function (err) {
            if (err) {
                reply('wrong');
            } else {
                reply('edited');
            }
        });
    }
}
