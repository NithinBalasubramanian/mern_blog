const express = require('express');
const testBlog = require('../models/testBlog');

const router = express.Router();

router.get('/',(req,res) => {
    testBlog.find({}).sort({title:-1})
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })

});

router.post('/savedata',(req,res) => {

    const data = req.body;
    const newTestblog = new testBlog(data);
    
    //save
    newTestblog.save((error) => {
        if(error){
            console.log(error);
        }else{
            res.json("Saved successfully");
        }
    });
});

router.put('/updateblog/:id',(req,res) => {

    const data = req.body;
    testBlog.findByIdAndUpdate(req.params.id,{$set:data},(err,docs) =>{
        if(!err) res.send(docs);
        else "Error in update";
    })
});

router.delete('/deleteblog/:id',(req,res) => {
    testBlog.findByIdAndDelete(req.params.id,(err,docs) =>{
        if(!err) res.send(docs);
        else "Error in Deleting";
    })
});

module.exports = router;