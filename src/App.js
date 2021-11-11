import React from "react";
//import styled from "styled-components";
import { Filtro } from "./components/Filtro/Filtro";

export default class App extends React.Component {
  state = {
    minValue: "",
    maxValue: "",
    searchName: "",
    listaProdutos: [
      {
        id: 1,
        name: "Foguete da Missão Apollo 11",
        value: 10000.0,
        imageUrl: "https://picsum.photos/200/200",
      },
    ],
  };

  // Funções

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
