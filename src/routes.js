const express = require('express')

const routes = express.Router();

routes.post('/cliente', (request, response) =>{
    const { nome, cpf, telefone, email, cep, endereco, cidade } = request.body


    return response.json({nome, cpf, telefone, email, cep, endereco, cidade})
})


module.exports = routes