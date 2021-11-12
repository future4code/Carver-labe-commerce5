import React from "react";
import styled from "styled-components"
// import CardCarrinho from "./CardCarrinho"

class Carrinho extends React.Component {
    
    
    render() {
        return (
            <div>
                {this.props.listaCarrinho.map((elemento, id) => {
                    return (
                        <div>
                            <div>
                                <h3>Carrinho:</h3>
                        <p key={elemento.id}> {elemento.name} - quantidade: {elemento.qtd} - preço: {elemento.value * elemento.qtd} </p>
                        <button onClick={() => this.props.removerCarrinho(elemento.id)}> Deletar produto</button>
                    </div>
                    
                    </div>
                        
                    )
                })}
            </div>
        )
    }
}

export default Carrinho;