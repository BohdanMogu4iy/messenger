var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('/ router handler by'+req.URL)
  res.send('response');
});

module.exports = router;
