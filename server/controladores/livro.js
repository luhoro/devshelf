function getLivros(request, response) {
    try {
        response.send('Bonjour monsieur babyyyy')
    } catch (error) {
        response.status(500)
        response.send(error.message)
    }
}

module.exports = {
    getLivros
}