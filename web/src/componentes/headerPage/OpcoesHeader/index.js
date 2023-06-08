import styled from "styled-components";
import { Link } from "react-router-dom";

const Opcoes = styled.ul`
  display: flex;
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

const textoOpcoes = ["Favoritos", "Estante"];

function OpcoesHeader() {
  return (
    <Opcoes>
      {textoOpcoes.map((texto) => (
        <Link to={`/${texto.toLowerCase()}`}>
          <Opcao>
            <p>{texto}</p>
          </Opcao>
        </Link>
      ))}
    </Opcoes>
  );
}

export default OpcoesHeader;
