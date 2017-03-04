/**
 * Created by stardust on 2016/12/11.
 */

var express = require('express');
var router = express.Router();
var Match = require('../models/match')

router.post('/', function (req, res) {
    var data = req.body.humData;
    var match = new Match(data);

    var result = match.doMatch(
        function (err, stdout) {
            if( err )
                res.send(err);
            else
                res.send(
                    Match.parseOutput(stdout)
                );
        }
    );

});


module.exports = router;

