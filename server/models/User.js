
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email:{
        type: String,
        require: true,
       
    },
    password: {
        type: String,
        require: true,
    },
    refreshToken: {
        type: String
    },
    role: {
        type: String,
        
    },
    gender: {
        type: String,
        
    },
    phone: {
        type: String,
       
    },
    

});

const User = mongoose.model('User', userSchema);

module.exports = User;