import styled from 'styled-components'
import Input from '../Input'
import CardLivro from '../cards/CardLivro'
import { Titulo } from '../Titulo'
import ButtonFavorito from '../cards/ButtonFavorito'
import { useState, useEffect } from 'react'
import { getLivros } from '../../servicos/livros'
import { postFavorito } from '../../servicos/favoritos'

const PesquisaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 120px;
`
const Subtitulo = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1.2em 0;
  text-align: center;
`
const CardLivros = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 80px 20px;
  justify-content: center;
  width: 98%;
`

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([])
  const [livros, setLivros] = useState([])

  useEffect(() => {
    fetchLivros()
  }, [])

  async function fetchLivros() {
    const livrosDaAPI = await getLivros()
    setLivros(livrosDaAPI)
  }

  async function insertFavorito(id, nome) {
    await postFavorito(id)
    alert(`Livro "${nome}" inserido aos favoritos`)
  }

  function pesquisarLivro(evento) {
    const textoDigitado = evento.target.value.toLowerCase()
    const resultadoPesquisa = livros.length
      ? livros.filter((livro) =>
          livro.nome.toLowerCase().includes(textoDigitado)
        )
      : []
    setLivrosPesquisados(resultadoPesquisa)
  }

  return (
    <PesquisaContainer>
      <Titulo cor="#000000" tamanhoFonte="2.3rem">
        Já sabe por onde começar?
      </Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={ evento => pesquisarLivro(evento) }
        onKeyPress={ evento => evento.key === 'Enter' ? pesquisarLivro(evento) : null }
      />
      <CardLivros>
        {livrosPesquisados.map((livro) => (
          <CardLivro>
            <p>{livro.nome}</p>
            <img src={livro.src} alt="book" />

            <ButtonFavorito
              onClick={() =>  insertFavorito(livro.id, livro.nome)}
            />
          </CardLivro>
        ))}
      </CardLivros>
    </PesquisaContainer>
  )
}

export default Pesquisa
