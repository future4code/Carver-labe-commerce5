import React from "react";

import CardProduto from "./CardProduto";
import { ContainerProdutos, ContainerHeader, ContainerPrincipalProdutos } from "./Style";

class Produtos extends React.Component {
    state = {
        ordem: true,
    }

    guardaOrdem = (event) => {
        this.setState({
            ordem: !this.state.ordem,
        })
    }

    listarProdutos = (listaProdutos) => {

        const ordemCrescente = (listaProdutos) => {
            return listaProdutos.sort(function (a, b) {
                if (a.value > b.value) {
                    return 1;
                }
                if (a.value < b.value) {
                    return -1;
                }
                return 0;
            });
        }
        
        const ordemDecrescente = (listaProdutos) => {
            return listaProdutos.sort(function (a, b) {
                if (a.value < b.value) {
                    return 1;
                }
                if (a.value > b.value) {
                    return -1;
                }
                return 0;
            });
        }
        
        if (this.state.ordem) {
            ordemCrescente(listaProdutos)
        } else {
            ordemDecrescente(listaProdutos);
        }

        const listarProdutos = listaProdutos.map((elemento, id) => {
            return (
                <CardProduto key={id} id={elemento.id} name={elemento.name} value={elemento.value} image={elemento.imageUrl} adicionarCarrinho={this.props.adicionarCarrinho} />
            )
        })
        return listarProdutos
    }

    render() {
        return (
            <ContainerPrincipalProdutos>
                <ContainerHeader>
                    <p>Quantidade de produtos: {this.props.listaProdutos.length}</p>
                    <p>Ordenação:
                        <select onChange={this.guardaOrdem}>
                            <option value={true}>Crescente</option>
                            <option value={false}>Decrescente</option>
                        </select>
                    </p>
                </ContainerHeader>
                <ContainerProdutos>
                    {this.listarProdutos(this.props.listaProdutos, this.props.adicionarCarrinho)}
                </ContainerProdutos>
            </ContainerPrincipalProdutos>
        )
    }
}

export default Produtos;