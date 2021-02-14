const mongoose = require('mongoose');

const linkSchema =  new mongoose.Schema({
    content : {
        type : String,
        required : true,
    },
    by : String,
    createdOn : {
        type : Date,
        default : new Date(),
    }
    // fileName : String,
    // filePath : String
});

//model

const linkBlog = mongoose.model('link',linkSchema);

module.exports = linkBlog;
