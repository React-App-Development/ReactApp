var express = require('express');
var router = express.Router();
//var firebase = require('../app/firebase');
/* GET users listing. 
var databaseRef = firebase.database().ref('navigator/users');
console.log(databaseRef); */
router.get('/', function(req, res, next) {
  res.send('gsa');
});


module.exports = router;
