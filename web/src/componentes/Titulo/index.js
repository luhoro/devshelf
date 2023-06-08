import styled from "styled-components";

export const Titulo = styled.h2`
    font-size: ${props => props.tamanhoFonte || '16px'};
    text-shadow: 1px 1px 20px #f0f0f0;
    margin: 0;
    color: ${props => props.cor || '#000000'};
    text-align: ${props => props.alinhamento || 'center'};
`