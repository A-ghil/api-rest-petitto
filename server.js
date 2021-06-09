const express = require('express')
const app  = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.listen(port)
app.use(express.urlencoded({ extended: true}))
app.use(express.json())

const routes = require('./src/routes/animais.js')
routes(app)

app.route('/').get((req, res) =>{
    res.send('Deu certo!')
})

console.log('Servidor inicializado na porta', port)