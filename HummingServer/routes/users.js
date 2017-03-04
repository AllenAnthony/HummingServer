var express = require('express');
var router = express.Router();
var User = require('../models/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function (req, res) {

    if( !req.body.id || !req.body.password ){
        res.send("Account Or Password Empty");
    }else{
        User.findOne({ id : req.body.id }, function (err, item) {
            if( err )
                res.send(err)
            else if( item )        // exist
                if( item.password == req.body.password )
                    res.send("Success");
                else
                    res.send("Incorrect Password");
            else
                res.send("Unregistered Account");
        });
    }
});


router.post('/register', function (req, res) {

    if( !req.body.id || !req.body.password ){
        res.send("Account Or Password Empty");
    }else{
        User.findOne({ id : req.body.id }, function (err, item) {
            if( err )
                res.send(err)
            else if( item )        // exist
                res.send("Account Already Exist");
            else{
                var user = new User();
                user.id = req.body.id;
                user.password = req.body.password;
                user.save(function (err) {
                    if( err )
                        res.send(err);
                    else
                        res.send("Success");
                });

            }

        });
    }

})



module.exports = router;
