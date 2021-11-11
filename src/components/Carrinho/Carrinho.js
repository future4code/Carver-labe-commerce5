import React from "react";

class Carrinho extends React.Component {
    render() {
        return (
            <div>
                {this.props.listaCarrinho.map((elemento, id) => {
                    return (
                        <div>
                            <p key={elemento.id}> {elemento.name} - quantidade: {elemento.qtd} - preço: {elemento.value * elemento.qtd} </p>
                            <button onClick={() => this.props.removerCarrinho(elemento.id)}> Deletar produto</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Carrinho;