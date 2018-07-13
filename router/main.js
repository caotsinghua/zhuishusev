const express = require('express');
const UserModel = require('../models/UserModel')
let router = express.Router();

router.get('/',function(req,res){
    res.render('index');
})
module.exports = router;
