import styled from "styled-components";

export const ContainerCarrinho = styled.div`
    margin-top: 7vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
    margin-top: -1vh;
}
`

export const TextoVazio = styled.p`
    text-align: center;
    align-self: center;
    `

export const ContainerCarrinhoInterno = styled.div`
    display: flex;
    flex-direction: column;
    width: 21vw;
    background-color: #dadada;
    padding-top: 4vh;
    padding-left: 1.5vh;
    border-radius: 30px;
`

export const BackgroundTitulo = styled.div`
    align-self: center;
    justify-content: center;
`

export const TituloCarrinho = styled.div`
    background-color: #887e92;
    height: 7vh;
    width: 11vw;
    display: flex;
    align-items: center;
    justify-content: space-space-evenly;
    border-radius: 30px;
    margin-bottom: 2vh;

    img {
    width: 4vw;
    }

    h4 {
    color: white;
    padding-left: 0.5vw;
    }
`

export const ContainerProdutoCarrinho = styled.div`
    display: flex;
    align-items: center;
`

export const IconeProdutoDeletar = styled.p`
    margin: 0.5vw;
    cursor: pointer;

    &:hover {
    background: #bdc6ce;
    border-radius: 30px;
  }
`

export const BotaoComprar = styled.div`
    margin-top: 1vw;
        padding: 0.5vw;
        width: 100%;
        font: 11px Roboto, sans-serif;
        border: none;
        background-color: #887e92;
        color: white;
        border-radius: 30px;
        cursor: pointer;
  `