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

    // if(req.files === null){
    //     return res.status(400).json({msg:'No files found'});
    // }

    const data = req.body;

    // const file = req.files.file;
    
    // file.mv(`${__dirname}/../blog/public/uploads/${file.name}`,err => {
    //     if(err){
    //         res.json("Error");
    //         return res.status(200).send(err);
    //     }
    // })

    // const filePath = '/uploads/'+file.name;

    const newTestblog = new testBlog({
        title : data.title,
        url : data.url,
        auther : data.auther,
        blog : data.blog,
        imgUrl : data.imgUrl,
        preheading : data.preheading,
        // fileName : file.name,
        // filePath : filePath
    });
    
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

router.get('/view/:url',(req,res) => {
    testBlog.find({ url : req.params.url })
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})

router.get('/recent/:url',(req,res) => {
    testBlog.find({ url : { $ne : req.params.url  }}).limit(5)
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})

module.exports = router;
