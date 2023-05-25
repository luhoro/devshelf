import Logo from "../Logo"
import OpcoesHeader from "../OpcoesHeader"
import IconesHeader from "../IconesHeader"
import './estilo.css'

function Header() {
    return (
        <header className='App-header'>
            <Logo />
            <OpcoesHeader />
            <IconesHeader />
        </header>
    )
}

export default Header