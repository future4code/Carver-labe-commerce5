import React from "react";

import { CardContainer } from "./StyleCard";

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