const mongoose = require('mongoose');
 
const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    age: {
        type: Number
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
},
{ timestamps: true }
);
 
const User = mongoose.model('User', UserSchema);
 
module.exports = User;
