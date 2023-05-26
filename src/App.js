import Header from './componentes/Header'
import Pesquisa from './componentes/Pesquisa'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient( 28deg, rgba(153, 134, 176, 1) 0%, rgba(171, 212, 215, 1) 100%);
`

function App() {
  return (
    <AppContainer>
      <Header />
      <Pesquisa />
    </AppContainer>
  );
}

export default App;