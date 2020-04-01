const connection = require('../database/connection')

module.exports = {
    async create (request, response) {
        const { nome, cpf, telefone, email, cep, endereco, cidade } = request.body

        await connection('cliente').insert({nome, cpf, telefone, email, cep, endereco, cidade})

        return response.json({nome, cpf, telefone, email, cep, endereco, cidade})
    },
    async index (request, response) {
        resposta = await connection('cliente').select('*')

        return response.json(resposta)
    },
    async delete (request, response) {
        const { id } = request.params

        const verificar = await connection('cliente').where('id', id).select('id').first()

        if(verificar['id'] == id){
            const del = await connection('cliente').where('id', id).delete()

            console.log(del)

            return response.json({'message': 'sucess', 'id_deleted': verificar['id']})
        }else{
            console.log('deu b.o')
        }

        return response.json(id)
    },
    async atualization (request, response) {
        const { id } = request.params
        const body = request.body

        console.log(body)

        const att = await connection('cliente').where('id', id).update(body)

        return response.json(att)
    }
}