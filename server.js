const express = require('express');
const fileupload = require('express-fileupload');
const mongoose = require('mongoose');
const morgan = require('morgan');
const path = require('path');
const cors = require('cors');

const app = express();

const route = require('./routes/api');

const PORT = process.env.PORT || 8080;

const MONGO_URL = 'mongodb+srv://nithinfurie17:711015Nith@1@cluster0.harnxzr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URL || 'mongodb://localhost/mern_1',{
    useNewUrlParser : true,
    useUnifiedTopology : true
});

mongoose.connection.on('connected',()=>{
    console.log('connected db');
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(fileupload());

app.use(express.json());

app.use(express.urlencoded({ extended : false }));

//extended true when big nested data

//Morgon used for developer logg on functionality 
app.use(morgan('tiny'));

app.use(cors());

app.use('/api',route);

// if(process.env.NODE_ENV === 'production'){
//     app.use(express.static('blog/build'));

//     app.get('*',(req,res) => {
//         res.sendFile(path.join(__dirname ,'blog','build','index.html'));
//     })
// }

app.listen(PORT,console.log(`Server started at port - v2 ${PORT}`))
