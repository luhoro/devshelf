import styled from 'styled-components'

const Input = styled.input`
    background: transparent;
    border: 1px solid #fff;
    padding: 20px 30px;
    border-radius: 50px;
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    width: 90%;
    max-width: 420px;

    &::placeholder {
        width: 100%;
        color: #fff;
        font-size: 1rem;
    }
`

export default Input