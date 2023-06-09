import styled from 'styled-components'

const CardFooter = styled.div`
  background-color: #e0e0e0;
  padding: 50px 0;
  display: flex;
  justify-content: center;
`
const Text = styled.p`
  font-weight: bold;
`

function Footer() {
  return (
    <CardFooter>
      <Text>Desenvolvido por Luisa Horowitz</Text>
    </CardFooter>
  )
}

export default Footer
