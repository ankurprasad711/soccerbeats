var express = require('express');
var router = express.Router();
var fs=require('fs');
var bodyParser = require('body-parser');
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }));
var path=require('path');
var db=require('./database');
var md5=require('md5');

//router.use(express.json());
var c=false;
/* GET home page. */
router.get('/',function (req,res) {
    console.log("hello!! i am in login");
     res.render('login',{ title:"login page",condition:c});
     c=false;
});

//type a word to find
router.post('/submit',function (req,res,next) {
    console.log("in the file");
    //var string=req.body.pwd;
    //var pass=md5(string);
    console.log(req.body);
    var data= {
        pwd:req.body.pwd,
        email: req.body.email
    };
    console.log(data);
    db.addtodb(data,function (result) {
        //res.end();
    });
   res.redirect('/login')
    //res.end();

});
router.post('/sub',function (req,res){

    var data1= {
        pwd:req.body.pwd,
        email:req.body.email
    }
    console.log("in login page submussion");
    console.log(data1);
    db.checkdata(data1,function(result){
       c=result;
        console.log(c);
        //res.end();
    });
    res.redirect('/login');

});
router.get('/signup',function (req,res) {
     res.render('signup',{ title: "signup"});
});

module.exports = router;
