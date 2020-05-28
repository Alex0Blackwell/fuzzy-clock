var express = require('express');
const Time = require("./../js/time.js");  // my module

var router = express.Router();

let time = new Time;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: time.getFuzzyTime});
});
// since this is fuzzy time it's ok if we're off by a minute




  console.log("online");
module.exports = router;
