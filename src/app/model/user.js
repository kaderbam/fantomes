var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
       unique: true
    },
    login: {
        type: String,
        
        unique: true
    },

    nom: {
        type: String,
        required: true,
        
    },

    roles: {
        type: String,
        required: true,
        unique: true
    },
    
  
   
});

var user = new mongoose.model('User', schema);

module.exports = user;