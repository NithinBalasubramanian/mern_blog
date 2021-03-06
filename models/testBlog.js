const mongoose = require('mongoose');

const testSchema =  new mongoose.Schema({
    title : {
        type : String,
        required : true,
        unique : true,
    },
    url : String,
    auther : String,
    blog : String,
    imgUrl : String, 
    preheading : String,
    subPara :  [{
        Content: String,
        SubHeading : String
    }],
    createdOn : {
        type : Date,
        default : new Date(),
    }
    // fileName : String,
    // filePath : String
});

//model

const testBlog = mongoose.model('test',testSchema);

module.exports = testBlog;
