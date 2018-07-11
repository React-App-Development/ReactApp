var express = require('express');
var router = express.Router();
const firebase = require('../firebaseconfig');

/* GET home page. */
router.get('/', function(req, res, next) {
	 firebase.database().ref('react-commerce').push({
	name: 'sdsa1'
  });
  res.send({status:'success'});
});

module.exports = router;
