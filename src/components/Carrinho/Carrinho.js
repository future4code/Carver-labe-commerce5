import React from "react";

import { ContainerCarrinho, TextoVazio, ContainerCarrinhoInterno, BackgroundTitulo, TituloCarrinho, ContainerProdutoCarrinho, IconeProdutoDeletar, BotaoComprar} from "./Style";

class Carrinho extends React.Component {

    render() {
        let valorTotal = 0;
        return (
            <ContainerCarrinho>
                <ContainerCarrinhoInterno>
                <BackgroundTitulo>
                    <TituloCarrinho>
                        <img src="https://icon-library.com/images/groceries-icon/groceries-icon-4.jpg" alt="Ícone do Carrinho" />
                        <h4>Carrinho</h4>
                    </TituloCarrinho>
                </BackgroundTitulo>
                
                    {this.props.listaCarrinho.map((elemento, id) => {
                        valorTotal = valorTotal + elemento.value * elemento.qtd
                        return (
                            <ContainerProdutoCarrinho>
                                <p key={elemento.id}> {elemento.qtd}x {elemento.name} - R$ {elemento.value * elemento.qtd} </p>
                                <IconeProdutoDeletar onClick={() => this.props.removerCarrinho(elemento.id)}> ✖️</IconeProdutoDeletar>
                            </ContainerProdutoCarrinho>
                        )
                    })}
                    <TextoVazio>{valorTotal > 0 ? `Total: R$ ${valorTotal}` : `Carrinho vazio.`}</TextoVazio>
                    <TextoVazio>{valorTotal > 0 && <BotaoComprar>Comprar</BotaoComprar>}</TextoVazio>
                </ContainerCarrinhoInterno>
            </ContainerCarrinho>
        )
    }
}

export default Carrinho;