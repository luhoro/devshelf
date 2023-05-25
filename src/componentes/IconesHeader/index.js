import perfil from '../../imagens/perfil.svg'
import sacola from '../../imagens/sacola.svg'
import styled from 'styled-components'

const Icone = styled.li`
    width: 25px;
`

const Icones = styled.ul`
    display: flex;
    gap: 30px;
`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone} /></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader