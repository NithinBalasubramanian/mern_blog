const mongoose = require('mongoose');

const testSchema =  new mongoose.Schema({
    title : String,
    url : String,
    auther : String,
    blog : String,
    imgUrl : String
    // fileName : String,
    // filePath : String
});

//model

const testBlog = mongoose.model('test',testSchema);

module.exports = testBlog;
