import Logo from '../../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`
	background-color: #f0f0f0;
	box-shadow: 1px 1px 50px 1px #c2c2c2;
	display: flex;
    flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	column-gap: 40px;
    row-gap: 10px;
    padding: 20px 0;
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header