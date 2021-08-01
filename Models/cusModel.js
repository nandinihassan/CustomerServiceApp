var mongoose = require('mongoose');

var obj = new mongoose.Schema({
    Name: { type: String },
    Address: { type: String },
    City: { type: String },
    State: { type: String }
});

module.exports = mongoose.model('CustCollection', obj);
