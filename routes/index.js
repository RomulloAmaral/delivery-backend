var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ ping: 'rodando' });
});


router.get('/dashboard', function(req, res, next) {
  const dashboardata = {
    pedidos:40, 
    entregas:55,
    vendasRealizadas:10, 
    vendasCanceladas:100,
  };

  res.json(dashboardata);
});

module.exports = router;
