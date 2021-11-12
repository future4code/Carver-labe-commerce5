import React from "react";

class Carrinho extends React.Component {
    render() {
        let valorTotal = 0;
        return (
            <div>
                {this.props.listaCarrinho.map((elemento, id) => {
                    valorTotal = valorTotal + elemento.value * elemento.qtd
                    return (
                        <div>
                            <p key={elemento.id}> {elemento.name} - quantidade: {elemento.qtd} - preço: {elemento.value * elemento.qtd} </p>
                            <button onClick={() => this.props.removerCarrinho(elemento.id)}> Deletar produto</button>
                            
                        </div>
                    )
                })}
                <p>Valor total: R$ {valorTotal}</p>
            </div>
        )
    }
}

export default Carrinho;