const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
   question: String,
    answer1: String,
    answer2: String,
    answer3: String,
    answer4: String,
  
   
   
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

});

const Test = mongoose.model('Test', userSchema);

module.exports = Test;