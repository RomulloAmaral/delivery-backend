var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ ping: 'rodando' });
});


router.get('/dashboard', function(req, res, next) {
  const dashboardata = {
    pedidos:100, 
    entregas:100,
    vendasRealizadas:100, 
    vendasCanceladas:100,
  };

  res.json({ dashboard:dashboardata});
});

module.exports = router;
