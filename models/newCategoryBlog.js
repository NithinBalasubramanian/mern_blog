const mongoose = require('mongoose');

const categorySchema =  new mongoose.Schema({
    category : String
});

//model

const categoryBlog = mongoose.model('category',categorySchema);

module.exports = categoryBlog;
