import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    align-items: center;
    min-height: 298px;
    height: 45vh;
    margin-bottom: 3vh;
    
   span {
        margin: 0.5vw;
        height: 2vh;
        align-self: start;
    }

    button {
        margin-top: 1vw;
        width: 80%;
        font: 11px Roboto, sans-serif;
    }
`

const CardProduto = (props) => {
    return (
        <CardContainer>
            <img src={props.image} alt="Foto do Produto" />
                <span>{props.name}</span>
                <span>R$ {props.value}</span>
            <button onClick={() => {props.adicionarCarrinho(props.id, props.name, props.value)}}>Adicionar ao carrinho</button>
        </CardContainer>
    )
}

export default CardProduto;