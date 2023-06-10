import { useEffect, useState } from 'react'
import styled from 'styled-components'
import ButtonFavorito from '../componentes/cards/ButtonFavorito'
import { deleteFavorito, getFavorito } from '../servicos/favoritos'
import CardLivro from '../componentes/cards/CardLivro'
import Footer from '../componentes/Footer'

const AppContainer = styled.div`
  height: 100%;
  background-image: linear-gradient(
    90deg,
    rgba(153, 134, 176, 1) 0%,
    rgba(171, 212, 215, 1) 100%
  );
`
const Titulo = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
  padding-top: 35px;
`
const CardLivros = styled.div`
  min-height: 60vh;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin: 80px 0;
  padding: 0 20px;
  justify-content: center;
`

function Favoritos() {
  const [favoritos, setFavoritos] = useState([])

  useEffect(() => {
    fetchFavoritos()
  }, [])

  async function fetchFavoritos() {
    const favoritosDaApi = await getFavorito()
    setFavoritos(favoritosDaApi)
  }

  async function deletarFavorito(id, nome) {
    await deleteFavorito(id)
    await fetchFavoritos()
    alert(`Livro "${nome}" deletado`)
  }

  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
      <CardLivros>
        {favoritos.length !== 0
          ? favoritos.map((favorito) => (
              <CardLivro>
                <p>{favorito.nome}</p>
                <img src={favorito.src} alt="book" />

                <ButtonFavorito
                  onClick={() => deletarFavorito(favorito.id, favorito.nome)}
                />
              </CardLivro>
            ))
          : null}
      </CardLivros>
      <Footer />
    </AppContainer>
  )
}

export default Favoritos
