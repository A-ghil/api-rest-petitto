module.exports = function (app) {
    const animais = require('../controllers/animaisController')
    app.route('/animais')
    .get(animais.listarTodosAnimais)
}