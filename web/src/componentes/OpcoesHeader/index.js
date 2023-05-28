import styled from 'styled-components'

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

const textoOpcoes = ['Categorias', 'Favoritos', 'Minha estante']

function OpcoesHeader() {
    return (
        <Opcoes>
            {textoOpcoes.map((texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ))}
        </Opcoes>
    )
}

export default OpcoesHeader