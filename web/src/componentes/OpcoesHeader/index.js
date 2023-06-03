import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Opcoes = styled.ul`
    display: flex;
    gap: 30px;
`

const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    cursor: pointer;
    text-transform: uppercase;
`

const textoOpcoes = ['Categorias', 'Favoritos', 'Estante']

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Link to={`/${texto.toLowerCase()}`}>
                    <Opcao><p>{texto}</p></Opcao>
                </Link>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader