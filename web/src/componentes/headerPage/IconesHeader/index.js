import perfil from '../../../imagens/perfil.svg'
import sacola from '../../../imagens/sacola.svg'
import styled from 'styled-components'

const Icones = styled.ul`
    display: flex;
    gap: 30px;
    cursor: pointer;
`
const Icone = styled.li`
    width: 25px;
    transition: 300ms;
  &:hover {
    translate: 0 -3px;
  }

`

const icones = [perfil, sacola]

function IconesHeader() {
    return (
        <Icones>
            {icones.map((icone) => (
                <Icone><img src={icone} alt='Icon'/></Icone>
            ))}
        </Icones>
    )
}

export default IconesHeader