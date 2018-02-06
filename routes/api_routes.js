var express = require('express');
var router = express.Router();
var UserController = require('../controllers/UserController');

// http://localhost:5000/api/blah

/* GET home page. */
router.get('/test', function(req, res) {
  res.send({message: 'Hey, it worked!'})
});

router.post('/create', function(req, res) {
	UserController.create(req.body, res);
});

module.exports = router;
