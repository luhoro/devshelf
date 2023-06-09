import styled from "styled-components";
import { Link } from "react-router-dom";

const Opcoes = styled.ul`
  display: flex;
  align-items: center;
  gap: 30px;
  text-decoration: none;
  height: 100%;
`;
const Opcao = styled.li`
  display: flex;
  cursor: pointer;
  text-transform: uppercase;
  padding: 12px 0;
  font-weight: bold;
  transition: 300ms;
  &:hover {
    translate: 0 -3px;
  }

`;


function OpcoesHeader() {
  return (
    <Opcoes>

        <Link to='/favoritos'>
          <Opcao>
            <p>Favoritos</p>
          </Opcao>
        </Link>
      
    </Opcoes>
  );
}

export default OpcoesHeader;
