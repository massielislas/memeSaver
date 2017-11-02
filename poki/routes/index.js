var express = require('express');
var router = express.Router();
var request = require('request');


var memes = [
  {
    id: 0,
    name: 'Pikachu',
    avatarUrl: 'http://rs795.pbsrc.com/albums/yy232/PixKaruumi/Pokemon%20Pixels/Pikachu_Icon__free__by_Aminako.gif~c200',
    likes:5
  },
  {
    id: 1,
    name: 'Charmander',
    avatarUrl: 'http://24.media.tumblr.com/tumblr_ma0tijLFPg1rfjowdo1_500.gif',
    likes:4
  },
  {
    id: 2,
    name: 'Mew',
    avatarUrl: 'http://media3.giphy.com/media/J5JrPT8r1xGda/giphy.gif',
    likes:3
  },
  {
    id: 3,
    name: 'Cubone',
    avatarUrl: 'http://rs1169.pbsrc.com/albums/r511/nthndo/tumblr_ljsx6dPMNm1qii50go1_400.gif~c200',
    likes:2
  },
  {
    id: 4,
    name: 'Cleffa',
    avatarUrl: 'http://media1.giphy.com/media/pTh2K2xTJ1nag/giphy.gif',
    likes:1
  },
  {
    id: 5,
    name: 'Gengar',
    avatarUrl: 'https://s-media-cache-ak0.pinimg.com/originals/7e/3b/67/7e3b67c53469cc4302035be70a7f2d60.gif',
    likes:0
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
