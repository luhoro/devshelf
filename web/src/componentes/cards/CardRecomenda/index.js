import styled from 'styled-components'
import { Titulo } from '../../Titulo'

const Card = styled.div`
    width: 90%;
    max-width: 600px;
    margin: 80px auto;
    padding: 30px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff60;
    border-radius: 24px;
    box-shadow: 1px 1px 50px #f0f0f050;
    div {
        display: flex;
        flex-direction: column;
        gap: 0.7em;
    }
`
const Subtitulo = styled.h4`
    font-size: 1.2rem;
    margin: 0;
    font-weight: bold;
`
const Descricao = styled.p`
    width: 70%;
`
const ImgLivro = styled.img`
    margin: 0;    
    width: 140px;
    border-radius: 8px;
    /* box-shadow: 1px 1px 10px #b9b9b9; */

`
const Botao = styled.button`
    padding: 6px;
    background-color: #9986b060;
    border: none;
    border-radius: 8px;
    width: 140px;
    color: #ffffff;
    transition: 300ms;
    cursor: pointer;
    &:hover {
        background-color: #9986b090;
    }
`

function CardRecomenda({ titulo, subtitulo, descricao, imagem }) {
    return (
        <Card>
            <div>
                <Titulo tamanho-fonte="1rem" alinhamento="start">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={imagem} />
                <Botao>Saiba mais</Botao>
            </div>
        </Card>
    )
}

export default CardRecomenda