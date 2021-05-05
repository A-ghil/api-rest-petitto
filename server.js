const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.use(express.json());

app.get('/api', (req, res) => { res.send('APi Funcionando!!') });

app.post('/api/login', (req, res) => {
    const {usuario} = req.body
    const payload = {
        usuario,
        perfil: 'Administrador',
        setor: 'TIC'
    }
    jwt.sign(payload, 'senhascr', (err, token) =>{
        if(err){
            res.sendStatus(400)
        }
        res.json({token})
    })
});

app.get('/api/decode', (req, res) => {
    const token = req.headers.authorization
    const payload = jwt.verify(token, 'senhascr')
    res.json({
        message: 'User Validation',
        payload
    });
});

app.get('/api/users', (req, res, next) => {
    const token = req.headers.authorization
    jwt.verify(token, 'senhascr', (err, data) =>{
        if(err){
            res.sendStatus(401)
        }
        next()
    }) 
    }, (req,res) => {
    const users = [
        {
            name: 'Fulano',
            idade: 20
        },
        {
            name: 'Fulano',
            idade: 20
        },
        {
            name: 'Fulano',
            idade: 40
        }        
    ]
    res.json(users)
});

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`APi Funcionando http://localhost:${port}`)
});