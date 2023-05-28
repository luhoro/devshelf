import styled from 'styled-components'
import Input from '../Input'
import { useState } from 'react'
import { livros } from './dadosPesquisa'

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

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante</Subtitulo>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(livro => livro.nome.includes(textoDigitado));
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            <CardLivros>
                {livrosPesquisados.map(livro => (
                    <CardLivro>
                        <p>{livro.nome}</p>
                        <img src={livro.src} alt="" />
                    </CardLivro>
                ))}
            </CardLivros>
        </PesquisaContainer>
    )
}

export default Pesquisa