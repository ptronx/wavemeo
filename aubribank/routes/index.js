const { Router } = require('express');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.render('home');
  //res.send('home');
});


module.exports = router;
