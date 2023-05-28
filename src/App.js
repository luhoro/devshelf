import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import UltimosLancamentos from './componentes/UltimosLancamentos'
import CardRecomenda from './componentes/CardRecomenda'
import ImagemLivro from './imagens/livro2.png'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(153,134,176,1) 0%, rgba(171,212,215,1) 100%);
  padding-bottom: 50px;
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
      <UltimosLancamentos />
      <CardRecomenda
        titulo='Talvez você se interesse por..'
        subtitulo='Angular 11'
        descricao='Construindo uma aplicação com a plataforma google'
        imagem={ImagemLivro}
      />
    </AppContainer>
  );
}

export default App;