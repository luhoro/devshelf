import styled from "styled-components"

const ButtonFavorito = styled.div`
  background: url('https://img.icons8.com/ios-filled/25/love-circled.png') no-repeat
    center;
  background-color: #ffffff60;
  border-radius: 50px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  transition: 200ms;
  cursor: pointer;
  &:hover {
    background-color: #ffffff;
  }
`

export default ButtonFavorito