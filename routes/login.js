var express = require('express');
var router = express.Router();
var url = require('url');
/* GET users listing. */




router.post('/', function(req, res, next) {

   try {
  		var query = url.parse(req.url,true).query;
  		console.log(query);
      
        req.getConnection(function(err, conn) {
            if (err) {
                console.error('SQL Connection error: ', err);
                return next(err);
            } else {
            	console.log(req.body.username);
                conn.query('SELECT * FROM petstore_user WHERE first_name = ?', [req.body.username], function(err, rows, fields) {
                    if (err) {
                        console.error('SQL error: ', err);
                        return next(err);
                    }
                    // var resEmp = [];
                    // for (var empIndex in rows) {
                    //     var empObj = rows[empIndex];
                    //     resEmp.push(empObj);
                    // }
                    res.json({'error':false,'user':rows});
                });
            }
        });
    } catch (ex) {
        console.error("Internal error:" + ex);
        return next(ex);
    }
});


module.exports = router;