import styled from 'styled-components'

const Livro = styled.div`
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
  p {
    padding: 0 0 10px 0;
    height: 35px;
  }

  img {
    height: 280px;
    box-shadow: 1px 1px 10px #d9d9d9;
    border-radius: 8px;
    width: 100%;
  }
`
const AddFavorito = styled.div`
  background: url('https://img.icons8.com/ios/25/000000/like--v2.png') no-repeat
    center;
  background-color: #ffffff50;
  border-radius: 50px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  width: 30px;
  height: 30px;
  cursor: pointer;
`

function CardLivro({ nome, src, id }) {
  return (
    <Livro>
      <p>{nome}</p>
      <img src={src} alt="book" />

      <AddFavorito
        // onClick={() => {
        //   insertFavorito(id, titulo)
        // }}
      />
    </Livro>
  )
}

export default CardLivro
