var express = require('express');
var router = express.Router();


/* Get Home Page */
router.get('/', function(req,res,next){
    res.render('userUpdate',{title: 'Account Settings'});
});

module.exports = router;