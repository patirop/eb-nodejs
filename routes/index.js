var express = require('express');
var router = express.Router();
var db = require('../db.js');


/* GET home page. */

router.get('/', function(req, res, next) {
  db.getRecords(records => {
    if(records === undefined)
      res.json({success: false, msg: 'records is undefined.'});
    else
      res.render('index.ejs', {records: records});
  });
});

module.exports = router;
