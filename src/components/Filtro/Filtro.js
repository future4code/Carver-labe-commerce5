import React from "react";
import styled from "styled-components";

const Filtros = styled.div`
  padding: 5px;

  input {
    height: 20px;
    border-radius: 7px;
    border: 1px solid #000;
    padding: 3px 10px;
  }
`;

export function Filtro(props) {
  return (
    <Filtros>
      <h2>Filtros</h2>
      <p>Valor mínimo:</p>
      <input
        type="number"
        value={props.minValue}
        onChange={props.updateMinValue}
      />

      <p>Valor máximo:</p>
      <input
        type="number"
        value={props.maxValue}
        onChange={props.updateMaxValue}
      />

      <p>Busca por nome:</p>
      <input value={props.searchName} onChange={props.updateSearch} />
    </Filtros>
  );
}
