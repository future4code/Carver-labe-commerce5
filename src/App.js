import React from 'react';

import Produtos from './components/Produtos/Produtos';
import Carrinho from './components/Carrinho/Carrinho';

export default class App extends React.Component {
  state = {
   minValue: "",
    maxValue: "",
    searchName: "",
    listaCarrinho: [],
    listaProdutos: [
      { id: 1, name: "Foguete da Missão Apollo 11", value: 1, imageUrl: "https://picsum.photos/200/200?random=1", },
      { id: 2, name: "Satélite Antigo", value: 7, imageUrl: "https://picsum.photos/200/200?random=2", },
      { id: 3, name: "Roupa Espacial", value: 99, imageUrl: "https://picsum.photos/200/200?random=3", },
      { id: 4, name: "Meteorito", value: 11, imageUrl: "https://picsum.photos/200/200?random=4", },
      { id: 5, name: "Aerolito", value: 10, imageUrl: "https://picsum.photos/200/200?random=5", },
      { id: 6, name: "Viagem em Ônibus Espacial", value: 9, imageUrl: "https://picsum.photos/200/200?random=6", },
    ]
  }

  // Funções

  // Adicionar Carrinho

  adicionarCarrinho = (idProduto, name, value) => {
    const carrinhoAtual = [...this.state.listaCarrinho];
    const produtoAdicionado = carrinhoAtual.filter((elemento) => {
      if (elemento.id === idProduto) {
        elemento.qtd = elemento.qtd + 1;
        return true;
      } else {
        return false;
      }
    });

    const produtosExistentes = carrinhoAtual.filter((elemento) => {
      return elemento.id !== idProduto;
    });

    produtosExistentes.push(produtoAdicionado)

    if (produtoAdicionado.length < 1) {
      const novoProduto = {
        id: idProduto,
        name: name,
        value: value,
        qtd: 1,
      }
      const novaLista = [...this.state.listaCarrinho, novoProduto]
      this.setState({
        listaCarrinho: novaLista,
      })
    } else {
      this.setState({
        listaCarrinho: produtosExistentes && carrinhoAtual,
      })
    }
  }

  // Remover carrinho:
  removerCarrinho = (idRemocao) => {
    const carrinhoAtual = [...this.state.listaCarrinho]
    let produtoDeletado;

    for (let i = 0; i < carrinhoAtual.length; i++) {
      if (carrinhoAtual[i].id === idRemocao) {
        carrinhoAtual[i].qtd = carrinhoAtual[i].qtd -1;
        if (carrinhoAtual[i].qtd === 0) {
          produtoDeletado = true;
        }
      }
    }

        if (produtoDeletado) {
      const deletarGeral = carrinhoAtual.filter((elemento) => {
        return elemento.id !== idRemocao;
      })
      
      this.setState({
        listaCarrinho: deletarGeral,
      })
    } else {
      this.setState({
        listaCarrinho: carrinhoAtual,
      })
    }
  }

  // Filtros:

  updateMinValue = (ev) => {
    this.setState({
      minValue: ev.target.value,
    });
  };
  updateMaxValue = (ev) => {
    this.setState({
      maxValue: ev.target.value,
    });
  };
  updateSearch = (ev) => {
    this.setState({
      searchName: ev.target.value,
    });
  };

  render() {
    return (
      <div>
        <Produtos listaProdutos={this.state.listaProdutos} adicionarCarrinho={this.adicionarCarrinho} />
        <Carrinho listaCarrinho={this.state.listaCarrinho} removerCarrinho={this.removerCarrinho} />
        <Filtro>
          minValue = {this.state.minValue}
          maxValue = {this.state.maxValue}
          searchName={this.state.searchName}
          updateMinValue = {this.updateMinValue}
          updateMaxValue = {this.updateMaxValue}
          updateSearch = {this.updateSearch}
        </Filtro>
      </div>
    );

  }
}
