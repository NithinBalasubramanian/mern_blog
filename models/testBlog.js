const mongoose = require('mongoose');

const testSchema =  new mongoose.Schema({
    title : String,
    auther : String,
    blog : String
});

//model

const testBlog = mongoose.model('test',testSchema);

module.exports = testBlog;
