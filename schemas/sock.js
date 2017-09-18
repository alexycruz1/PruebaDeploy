var mongoose = require('mongoose');

var sockSchema = new mongoose.Schema({
    name: String,
    brand: String,
    color: String,
    size: String,
    type: String,
    pattern: String,
    sex: String,
    price: String
});

module.exports = mongoose.model('sock', sockSchema);