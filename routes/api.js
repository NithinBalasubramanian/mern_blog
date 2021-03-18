const express = require('express');
const testBlog = require('../models/testBlog');
const categoryBlog = require('../models/newCategoryBlog');
const linkBlog = require('../models/linkBlog');
const router = express.Router();

router.get('/',(req,res) => {
    testBlog.find({}).sort({createdOn:-1})
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
        category : data.category,
        title : data.title,
        url : data.url,
        auther : data.auther,
        blog : data.blog,
        subPara : JSON.parse(data.subPara),
        imgUrl : data.imgUrl,
        preheading : data.preheading,
        subImgUrl : data.subImgUrl,
        videoLink : data.videoLink,
        reference : data.reference,
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

router.post('/savecategory',(req,res) => {
    const data = req.body;
    
    const newCategoryBlog = new categoryBlog({
        category : data.category
    });
    
    //save
    newCategoryBlog.save((error) => {
        if(error){
            console.log(error);
        }else{
            res.json("Saved successfully");
        }
    });
});

router.get('/getCategory',(req,res) => {
    categoryBlog.find({}).sort({createdOn:-1})
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
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
    testBlog.find({ url : { $ne : req.params.url  }}).sort({createdOn:-1}).limit(10)
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})

router.get('/link',(req,res) => {
    linkBlog.find({}).sort({createdOn:-1})
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})

router.post('/savelink',(req,res) => {

    const data = req.body;

    const newLinkblog = new linkBlog({
        by : data.by,
        content : data.content
    });
    
    //save
    newLinkblog.save((error) => {
        if(error){
            console.log(error);
        }else{
            res.json("Saved successfully");
        }
    });
});

router.delete('/deletelink/:id',(req,res) => {
    linkBlog.findByIdAndDelete(req.params.id,(err,docs) =>{
        if(!err) res.send(docs);
        else "Error in Deleting";
    })
});

//Api fetch for tech-Idiots ( Home Page )

router.get('/homeTopFetch',(req,res) => {
    testBlog.find({}).sort({createdOn:-1}).limit(5)
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
});

router.get('/homeFetch',(req,res) => {
    testBlog.find({}).sort({createdOn:1}).limit(10)
    .then((data) => { 
        // console.log('data',data);
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
});

router.get('/blogFetch/:category',(req,res) => {
    testBlog.find({ category : req.params.category })
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})

router.get('/recentCategory/:url/:category',(req,res) => {
    testBlog.find({ url : { $ne : req.params.url  } , category : req.params.category }).sort({createdOn:-1}).limit(10)
    .then((data) => { 
        res.json(data);
    })
    .catch((error) => { 
        console.log('error',error);
    })
})

module.exports = router;
