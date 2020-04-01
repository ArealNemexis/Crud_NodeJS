const express = require('express')
const ClienteController = require('./controller/ClienteController')
const routes = express.Router();

routes.post('/cliente', ClienteController.create)
routes.get('/cliente', ClienteController.index)
routes.delete('/cliente/:id', ClienteController.delete)
routes.patch('/cliente/:id', ClienteController.atualization)



module.exports = routes