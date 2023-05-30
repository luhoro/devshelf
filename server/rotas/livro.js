const { Router } = require('express')
const { getLivros } = require('../controladores/livro')

const router = Router()

router.get('/', getLivros)

router.post('/', (request, response) => {
    response.send('Estás a fazer uma requisição do tipo POST')
})

router.patch('/', (request, response) => {
    response.send('Estás a fazer uma requisição do tipo PATCH')
})

router.delete('/', (request, response) => {
    response.send('Estás a fazer uma requisição do tipo DELETE')
})

module.exports = router