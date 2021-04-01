const mongoose = require('mongoose');

const subscribeSchema =  new mongoose.Schema({
    name : String ,
    email : String ,
    createdOn : {
        type : Date,
        default : new Date(),
    }
});

//model

const newSubscribe = mongoose.model('subscribe',subscribeSchema);

module.exports = newSubscribe;
