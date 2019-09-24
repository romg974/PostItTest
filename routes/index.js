var express = require('express');
var router = express.Router();
var path = require('path');
var qr = require('qrcode');



/* GET home page. */
router.get('/display', function(req, res, next) {
  res.render('index', { title: 'Le campus en feu' });
});

router.get('/qr', function(req, res, next){
  qr.toFile('qr.png', 'http://localhost:3000/', function(err){
    res.sendFile(path.resolve(__dirname+'/../qr.png'));
  });
});

router.get('/', function(req, res, next){
   res.render('app');
});

module.exports = router;
