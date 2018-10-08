var express = require('express');
var router = express.Router();

let conversation = [];

let lastSeen = new Date();
conversation.push("woof"); 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/messages', function(req, res) {
  console.log("****************Get request****************");
  let newMessages = [];

  for (let i = 0; i < conversation.length; i++) {
      if(conversation[i].timestamp > lastSeen){
        newMessages.push(conversation[i]);
      }
  }
  res.json(newMessages);
  lastSeen = new Date();
});

router.post('/messages', function(req, res) {
    let message = {
        ip: req.ip,
        timestamp: new Date(),
        user: req.param('user'),
        text: req.param('text')
    }
    conversation.push(message);
    res.json(message);
});

module.exports = router;
