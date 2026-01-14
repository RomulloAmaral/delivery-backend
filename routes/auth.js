var express = require('express');
var router = express.Router();

router.post('/login', function(req, res, next) {
  const userdata = {login:"bona@gmail.com", token:"esperandoToken"};
  res.json({ user:userdata });
});

module.exports = router;
