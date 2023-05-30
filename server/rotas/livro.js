const { Router } = require('express')

const router = Router()

router.get('/', (request, response) => {
    response.send('Bonjour monsieur babyyyy')
})

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