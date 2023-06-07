import styled from 'styled-components'
import Input from '../Input'
import CardLivro from '../cards/CardLivro'
import { useState, useEffect } from 'react'
import { getLivros } from '../../servicos/livros'
import { postFavorito } from '../../servicos/favoritos'

const PesquisaContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const Titulo = styled.h2`
  font-size: 2.5rem;
  margin: 2em 0 0.5em 0;
`
const Subtitulo = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  margin-bottom: 1em;
`
const CardLivros = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 60px 0 60px 0;
  justify-content: center;
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
    alert(`Livro "${nome}" inserido`)
  }

  return (
    <PesquisaContainer>
      <Titulo>Já sabe por onde começar?</Titulo>
      <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
      <Input
        placeholder="Escreva sua próxima leitura"
        onBlur={(evento) => {
          const textoDigitado = evento.target.value
          const resultadoPesquisa = livros.filter((livro) =>
            livro.nome.includes(textoDigitado)
          )
          setLivrosPesquisados(resultadoPesquisa)
        }}
      />
      <CardLivros>
        {livrosPesquisados.map((livro) => (
          <CardLivro nome={livro.nome} src={livro.src} id={livro.id} />
        ))}
      </CardLivros>
    </PesquisaContainer>
  )
}

export default Pesquisa
