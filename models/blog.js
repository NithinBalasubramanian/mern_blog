const mongoose = require('mongoose');

const blogSchema =  new mongoose.Schema({
    blogData : {
        type : String,
     } ,
    createdOn : {
        type : Date,
        default : new Date(),
    }
});

//model

const blog = mongoose.model('blog',blogSchema);

module.exports = blog;
