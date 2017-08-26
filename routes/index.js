var express = require('express');
var router = express.Router();
var db = require('../db.js');


/* GET home page. */

router.get('/', function(req, res, next) {
  db.getRecords(records => {
    res.render('index.ejs', {records: records});
  });
});

module.exports = router;
