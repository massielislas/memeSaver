var express = require('express');
var router = express.Router();
var request = require('request');


var memes = [
  {
    id: 0,
    name: 'Me on a daily basis',
    avatarUrl: 'http://themetapicture.com/media/picture.jpe',
    likes:5
  }
];


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile('index.html', { title: 'public' });
});

router.get('/memes', function(req, res) {
  console.log("In memes");
  res.send(memes);
});

router.post('/memes', function(req, res) {
    console.log("In memes Post");
    console.log(req.body);
    memes.push(req.body);
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

router.post('/memesUp', function(req, res) {
    console.log("In memesUp Post");
    console.log(req.body);
    memes[req.body.id].likes += 1;
    res.end('{"success" : "Updated Successfully", "status" : 200}');
});

module.exports = router;
