const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title: String,
   question1: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;