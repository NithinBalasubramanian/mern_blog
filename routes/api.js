const express = require('express');
const testBlog = require('../models/testBlog');

const router = express.Router();

router.get('/',(req,res) => {
    testBlog.find({})
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

module.exports = router;