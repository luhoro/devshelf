import logo from "../../imagens/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  gap: 0.8rem;
`;

const LogoImage = styled.img`

`;

export default function Logo() {
  return (
    <LogoContainer>
      <LogoImage src={logo} alt="Logo" className="logo-img" />
      <p>
        
        <strong>Dev</strong>Shelf{" "}
      </p>
    </LogoContainer>
  );
}
