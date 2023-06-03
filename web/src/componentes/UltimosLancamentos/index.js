import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color:  #ffffff30;
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

const Livros = styled.div`
    background-color:  #ffffff20;
    padding: 1em;
    border-radius: 24px;
    transition: all 300ms;
    &:hover {
        background-color:  #ffffff40;
    }

    img {
        width: 100%;
        height: 100%;
        border: 1px solid #b9b9b9;
        border-radius: 8px;
    }
`

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#000000"
                tamanhoFonte="2.5rem"
            >
                Últimos lançamentos
            </Titulo>
            <NovosLivrosContainer>
                {livros.map(livro => (
                    <Livros>
                        <img src={livro.src} alt={livro.nome} />
                    </Livros>
                ))}
            </NovosLivrosContainer>


        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos