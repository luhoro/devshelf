const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, excluiLivro } = require('../servicos/livro');

function getLivros(req, res) {
    try {
        const livros = getTodosLivros()
        res.send(livros)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function getLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const livro = getLivroPorId(id)
            res.send(livro)
        } else {
            res.status(422)
            res.send('ID inválido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body
        const nome = req.body.nome
        const id = req.body.id
        if (nome && id) {
            insereLivro(livroNovo)
            res.status(201)
            res.send('Livro inserido com sucesso!')
        } else {
            res.status(422)
            res.send('Os campos "nome" e "id" são obrigatórios')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id

        if (id && Number(id)) {
            const body = req.body
            modificaLivro(body, id)
            res.send('Item modificado com sucesso')
        } else {
            res.status(422)
            res.send('ID inválido')
        }


    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteLivro(req, res) {
    try {
        if (id && Number(id)) {
            const id = req.params.id
            excluiLivro(id)
            res.send('Item excluído com sucesso')
        } else {
            res.status(422)
            res.send('ID inválido')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}