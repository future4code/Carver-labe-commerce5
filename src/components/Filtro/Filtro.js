import React from "react";

import { Filtros, ContainerFiltro, BackgroundTitulo, TituloFiltro } from "./Style";

export function Filtro(props) {
  return (
    <Filtros>
      <ContainerFiltro>
      <BackgroundTitulo>
        <TituloFiltro>
          <img src="https://www.pinclipart.com/picdir/big/527-5276357_magnifying-clipart-evidence-based-practice-transparent-physical-evidence.png" alt="Ícone de Pesquisa" />
          <h4>O que você procura?</h4>
        </TituloFiltro>
      </BackgroundTitulo>

      <p>Busca por nome:</p>
      <input value={props.searchName} onChange={props.updateSearch} />

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
    </ContainerFiltro>
    </Filtros>
  );
}
