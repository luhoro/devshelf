import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { deleteFavorito, getFavorito } from '../servicos/favoritos'
import livroImg from '../imagens/livro.png'

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(90deg, rgba(153,134,176,1) 0%, rgba(171,212,215,1) 100%);
  padding-bottom: 50px;
`
const Titulo = styled.h2`
   color: #FFF;
   font-size: 36px;
   text-align: center;
   width: 100%;
   padding-top: 35px
`
const CardLivros = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 60px 0 60px 0;
    justify-content: center;
`
const CardLivro = styled.div`
    background: rgba(255, 255, 255, 0.1);
    padding: 0.9em;
    border-radius: 24px;
    width: 210px;
    transition: all 300ms;
    text-align: center;

    &:hover {
        background: rgba(255, 255, 255, 0.3);
    }

    p {
        margin: 0;
        padding: 0 0 10px 0;
        height: 35px;
    }

    img {
        height: 280px;
        border: 1px solid #b9b9b9;
        border-radius: 8px;
    }
`

function Favoritos() {
  const [ favoritos, setFavoritos ] = useState([])

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavorito()
    setFavoritos(favoritosDaApi)
  }

  async function deletarFavorito(id, nome) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Livro "${nome}" deletado`)
  }

  useEffect(() => {
    fetchFavoritos()
  }, [])

  return (
    <AppContainer>

      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <CardLivros>
        {
          favoritos.length !== 0 ? favoritos.map(favorito => (
            <CardLivro onClick={ () => deletarFavorito(favorito.id, favorito.nome)}>
              <p>{favorito.nome}</p>
              <img src={livroImg} alt="book" />
            </CardLivro>
          )) : null
        }
      </CardLivros>

    </AppContainer>
  );
}

export default Favoritos;