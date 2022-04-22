import React from 'react';
import styled from 'styled-components';

import Produtos from './components/Produtos/Produtos';
import Carrinho from './components/Carrinho/Carrinho';
import { Filtro } from './components/Filtro/Filtro';


import GlobalStyle from './components/Styles/GlobalStyles';
import { ContainerHeader, LogoHeader, ContainerMain, ContainerPrincipal, ContainerEsquerda, ContainerCentro, ContainerDireita, ContainerFooter } from './components/Styles/AppStyle';

export default class App extends React.Component {
  state = {
    minValue: "",
    maxValue: "",
    searchName: "",
    listaCarrinho: [],
    listaProdutos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 400,
        imageUrl: "https://picsum.photos/200/200?random=1",
      },
      {
        id: 2,
        name: "Viagem em Satélite Antigo",
        value: 100,
        imageUrl: "https://picsum.photos/200/200?random=2",
      },
      {
        id: 3,
        name: "Viagem Volta ao Mundo",
        value: 500,
        imageUrl: "https://picsum.photos/200/200?random=3",
      },
      {
        id: 4,
        name: "Meteorito",
        value: 700,
        imageUrl: "https://picsum.photos/200/200?random=4",
      },
      {
        id: 5,
        name: "Aerolito",
        value: 700,
        imageUrl: "https://picsum.photos/200/200?random=5",
      },
      {
        id: 6,
        name: "Viagem em Ônibus Espacial",
        value: 1100,
        imageUrl: "https://picsum.photos/200/200?random=6",
      },
    ],
  };

  // Ciclos de vida:

  salvarLocalStorage = () => {
    localStorage.setItem("carrinho", JSON.stringify(this.state.listaCarrinho))
  }

  buscarLocalStorage = () => {
    const carrinhoLocalStorage = localStorage.getItem("carrinho")
    const carrinhoParse = JSON.parse(carrinhoLocalStorage)

    this.setState({
      listaCarrinho: carrinhoParse || [],
    })
  }

  componentDidMount = () => {
      this.buscarLocalStorage();
  }

  componentDidUpdate = (prevProps, prevState) => {
    this.salvarLocalStorage();
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

    produtosExistentes.push(produtoAdicionado);

    if (produtoAdicionado.length < 1) {
      const novoProduto = {
        id: idProduto,
        name: name,
        value: value,
        qtd: 1,
      };
      const novaLista = [...this.state.listaCarrinho, novoProduto];
      this.setState({
        listaCarrinho: novaLista,
      });
    } else {
      this.setState({
        listaCarrinho: produtosExistentes && carrinhoAtual,
      });
    }
  };

  // Remover carrinho:
  removerCarrinho = (idRemocao) => {
    const carrinhoAtual = [...this.state.listaCarrinho];
    let produtoDeletado;

    for (let i = 0; i < carrinhoAtual.length; i++) {
      if (carrinhoAtual[i].id === idRemocao) {
        carrinhoAtual[i].qtd = carrinhoAtual[i].qtd - 1;
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
      });
    } else {
      this.setState({
        listaCarrinho: carrinhoAtual,
      });
    }
  };

  // Filtros:

  updateMinValue = (ev) => {
    if (ev.target.value < 0) {
      this.setState({
        minValue: "",
      });
    } else {
      this.setState({
        minValue: ev.target.value,
      });
    }
  };
  updateMaxValue = (ev) => {
    if (ev.target.value < 0) {
      this.setState({
        minValue: "",
      });
    } else {
      this.setState({
        maxValue: ev.target.value,
      });
    }
  };
  updateSearch = (ev) => {
    this.setState({
      searchName: ev.target.value,
    });
  };

  render() {
    let listaFiltrada = []
    const filtrosCriterios = this.state.listaProdutos
      .filter(produto => {
        return produto.name.toLowerCase().includes(this.state.searchName.toLowerCase());
      })
      .filter(produto => {
        return this.state.minValue === "" || produto.value >= this.state.minValue;
      })
      .filter(produto => {
        return this.state.maxValue === "" || produto.value <= this.state.maxValue;
      })
      .map(produto => {
        listaFiltrada.push(produto);
      })

    return (

      <ContainerPrincipal>
        <ContainerHeader>
          <LogoHeader>
            <img src="https://www.pinclipart.com/picdir/big/228-2282702_astro-naughty-clipart.png" alt="Logo AstroShop" />
            <h3>AstroShop</h3>
          </LogoHeader>
        </ContainerHeader>
        <ContainerMain>
          <ContainerEsquerda>
            <Filtro
              minValue={this.state.minValue}
              maxValue={this.state.maxValue}
              searchName={this.state.searchName}
              updateMinValue={this.updateMinValue}
              updateMaxValue={this.updateMaxValue}
              updateSearch={this.updateSearch}
            />
          </ContainerEsquerda>
          <ContainerCentro>
            <Produtos listaProdutos={listaFiltrada} adicionarCarrinho={this.adicionarCarrinho} />
          </ContainerCentro>
          <ContainerDireita>
            <Carrinho listaCarrinho={this.state.listaCarrinho} removerCarrinho={this.removerCarrinho} />
          </ContainerDireita>
        </ContainerMain>
        <ContainerFooter>
          <p>AstroShop - O astro aqui é você!</p>
          <a href="http://www.facebook.com" target="_blank"> <img src="https://www.pinclipart.com/picdir/big/150-1504080_facebook-white-facebook-white-icon-png-2018-clipart.png" /> </a>
          <a href="http://www.instagram.com" target="_blank"> <img src="https://www.pinclipart.com/picdir/big/136-1360011_facebook-instagram-instagram-clipart.png" /> </a>
          <a href="http://www.youtube.com" target="_blank"> <img src="https://www.pinclipart.com/picdir/big/217-2178146_social-icon-social-icon-social-icon-social-icon.png" /> </a>
        </ContainerFooter>
        <GlobalStyle />
      </ContainerPrincipal>

    );
  }
}