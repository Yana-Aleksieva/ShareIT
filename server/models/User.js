
const mongoose = require('mongoose');


let validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const userSchema = new mongoose.Schema({
    
    name: {
        type: String,
        require: true,
        min: [2, 'At least two letters'],
    },
    email:{
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: "Email address is required",
        validate: [validateEmail, 'Please fill a valid email address'],
       
    },
    password: {
        type: String,
        required: [true, 'User password required']
    },
    refreshToken: {
        type: String
    },
    role: {
        type: String,
        required: [true, 'User role required']
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