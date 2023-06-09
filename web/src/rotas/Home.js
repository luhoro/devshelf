import Footer from '../componentes/Footer'
import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import CardRecomenda from '../componentes/cards/CardRecomenda'
import styled from 'styled-components'

const AppContainer = styled.div`
  background-image: linear-gradient(90deg, rgba(153,134,176,1) 0%, rgba(171,212,215,1) 100%);
`

function Home() {
  return (
    <AppContainer>
      <Pesquisa />
      <UltimosLancamentos />
      <CardRecomenda
        titulo='Talvez você se interesse por..'
        subtitulo='Primeiros passos com React'
        descricao='Construindo aplicações web'
        imagem={"https://m.media-amazon.com/images/I/41V-6PYI5bL.jpg"}
      />
      <Footer/>
    </AppContainer>
  )
}

export default Home;