import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 2rem;
    gap: 0.8rem;      
`

const LogoImage = styled.img`
    width: 50px;  
`

export default function Logo() {
    return (
        <LogoContainer>
            <LogoImage src={logo}
                alt='Logo'
                className='logo-img'
            />
            <p> <strong>Dev</strong>Shelf </p>
        </LogoContainer>
    )
}