var express = require('express');
var router = express.Router();

router.get('/company', function(req, res, next) {
  const companydata  = {
    name:"bonapizza",
    cnpj:"44.636.640/0001-68",
    address:{
      country:"Brazil",
      state:"Bahia",
      city:"Teixeira de Freitas",
      neighborhood:"colina verde",
      street:"rua são josé",
      cep:"38400-650",
    },
  };

  res.json({ company:companydata});
});

router.post('/company', function(req, res, next) {
  const companydata  = {
    name:"bonapizza",
    cnpj:"44.636.640/0001-68",
    address:{
      country:"Brazil",
      state:"Bahia",
      city:"Teixeira de Freitas",
      neighborhood:"colina verde",
      street:"rua são josé",
      cep:"38400-650",
    },
  };

  res.json({message:"Empresa cadastrada com sucesso!"});
});

router.put('/company', function(req, res, next) {
  const companydata  = {
    name:"bonapizza",
    cnpj:"44.636.640/0001-68",
    address:{
      country:"Brazil",
      state:"Bahia",
      city:"Teixeira de Freitas",
      neighborhood:"colina verde",
      street:"rua são josé",
      cep:"38400-650",
    },
  };

  res.json({message:"Empresa atualizada com sucesso!"});
});



module.exports = router;
