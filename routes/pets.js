const express = require('express');
const router = express.Router();

router.get('/', function (req, res, next) {
    res.status(200).send({
        mensagem:"Usando o Get dentro da Rota"
    })
});

router.get('/:id_pets', function (req, res, next) {
    const id = req.params.id_pets
    res.status(200).send({
        mensagem:"Usando o Get dentro da Rota",
        id:id
    })
});

router.post('/', function (req, res, next) {
    res.status(201).send({
        mensagem:"Usando o Get dentro da Rota"
    })
});

module.exports = router;