const {animais} = require('../models')

exports.listarTodosAnimais = (req, res) => {
    animais.findAll({}).then(animal =>{
        res.send(animal)
    }).catch(error => {
        console.log('12344')
    })
}