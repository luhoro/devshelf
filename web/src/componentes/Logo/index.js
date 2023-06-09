import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 0.5rem;
  transition: 300ms;
  &:hover {
    translate: 0 -3px;
  }

`

export default function Logo() {
  return (
    <LogoContainer>
      <img src={logo} alt="Logo" className="logo-img" />
      <p>
        <strong>Dev</strong>Shelf{' '}
      </p>
    </LogoContainer>
  )
}
