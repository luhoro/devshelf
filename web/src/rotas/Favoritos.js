import Pesquisa from '../componentes/Pesquisa'
import styled from 'styled-components'

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(153,134,176,1) 0%, rgba(171,212,215,1) 100%);
  padding-bottom: 50px;
`

function Favoritos() {
  return (
    <AppContainer>
      <Pesquisa />
    </AppContainer>
  );
}

export default Favoritos;