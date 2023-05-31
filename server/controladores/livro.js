const { getTodosLivros } = require('../servicos/livro');

function getLivros(request, response) {
    try {
        const livros = getTodosLivros()
        response.send(livros)
    } catch (error) {
        response.status(500)
        response.send(error.message)
    }
}

module.exports = {
    getLivros
}