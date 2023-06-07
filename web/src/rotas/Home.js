import Pesquisa from '../componentes/Pesquisa'
import UltimosLancamentos from '../componentes/UltimosLancamentos'
import CardRecomenda from '../componentes/cards/CardRecomenda'
import ImagemLivro from '../imagens/livro2.png'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(153,134,176,1) 0%, rgba(171,212,215,1) 100%);
  padding-bottom: 50px;
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
    </AppContainer>
  );
}

export default Home;