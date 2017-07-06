var express = require('express');
var router = express.Router();
const path = require('path');


/* GET home page. */
router.get('/', function(req, res, next) {
 //res.render('index', { title: 'Express' });
     res.sendFile(path.resolve('views/index.html'));

 //console.log(path.join( __dirname + "/views/" + "index.html"));
     //res.sendFile(path.join( __dirname + "/views/" + "index.html"));

});

module.exports = router;