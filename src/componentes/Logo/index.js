import './estilo.css'
import logo from '../../imagens/logo.svg'

export default function Logo() {
    return (
        <div className='logo'>
            <img src={logo}
                alt='Logo'
                className='logo-img'
            />
            <p> <strong>Dev</strong>Shelf </p>
        </div>
    )
}