import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardLivro from '../cards/CardLivro'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
  background-color: #ffffff30;
  padding: 50px 0 50px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`
const NovosLivrosContainer = styled.div`
  display: flex;
  gap: 40px;
`

function UltimosLancamentos() {
  return (
    <UltimosLancamentosContainer>
      <Titulo cor="#000000" tamanhoFonte="2.5rem">
        Últimos lançamentos
      </Titulo>
      <NovosLivrosContainer>
        {livros.map((livro) => (
          <CardLivro nome={livro.nome} src={livro.src} id={livro.id} />
        ))}
      </NovosLivrosContainer>
    </UltimosLancamentosContainer>
  )
}

export default UltimosLancamentos