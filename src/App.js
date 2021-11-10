import React from 'react';
import styled from "styled-components";

export default class App extends React.Component {
  state = {
    inputFiltroValorMinimo: "",
    inputFiltroValorMaximo: "",
    buscarNome: "",
    listaProdutos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      }
    ]
  }

  // Funções

  render() {
    return (
      <div>
        {/* <Filtro />
        <Produtos />
        <Carrinho /> */}
      </div>
    )
  }
}