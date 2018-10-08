var express = require('express');
var router = express.Router();

let conversation = [];
conversation.push("woof"); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/messages', function(req, res) {
  res.json(conversation); 
});

router.post('/messages', function(req, res) {
  let message = {
    ip: req.ip, 
    timestamp: new Date(), 
    user:req.param('user'),
    text: req.param('text')
  }
  conversation.push(message); 
  res.json(message);
});


module.exports = router;
