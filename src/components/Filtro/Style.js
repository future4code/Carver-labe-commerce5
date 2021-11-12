import styled from "styled-components"

export const Filtros = styled.div`
    margin-top: 7vh;
    display: flex;
    flex-direction: column;
    align-items: center;

input {
  margin-top: -1vh;
}
`

export const ContainerFiltro = styled.div`
    background-color: #dadada;
    padding: 4vh;
    border-radius: 30px;
`

export const BackgroundTitulo = styled.div`
    justify-content: center;
`

export const TituloFiltro = styled.div`
    background-color: #887e92;
    height: 7vh;
    width: 13vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 30px;

    img {
    width: 4vw;
    }

    h4 {
    color: white;
    margin-left: 0.5vw;
    }
`