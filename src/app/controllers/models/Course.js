const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, maxLength: 256}, 
    description: {type: String, maxLength: 1000},
    image: {type: String, maxLength: 256},
    createdAt: {type: Date, default: Date.now},
    updatedAt:  {type: Date, default: Date.now}
});

module.exports = mongoose.model('Course', Course);