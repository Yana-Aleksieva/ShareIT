const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
    title:  { 
        type:String,
         require: true
        },
    question1: { 
        type:String,
         require: true
        },
    answer1:  { 
        type:String,
         require: true
        },
    answer2:  { 
        type:String,
         require: true
        },
    answer3:  { 
        type:String,
         require: true
        },
    answer4:  { 
        type:String,
         require: true
        },
    class:  { 
        type:Number,
         require: true
        },
    topic: { 
        type:String,
         require: true
        },
    _ownerId: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }

});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;