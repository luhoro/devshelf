import styled from 'styled-components'

const CardLivro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  padding: 1em;
  border-radius: 24px;
  width: 230px;
  height: 370px;
  transition: all 300ms;
  text-align: center;
  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }
  img {
    height: 280px;
    box-shadow: 1px 1px 10px #b6b6b6;
    border-radius: 8px;
    width: 100%;
  }
`


export default CardLivro
