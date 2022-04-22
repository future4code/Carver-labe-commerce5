import styled from "styled-components";

export const ContainerHeader = styled.header`
  width: 98vw;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
`
export const LogoHeader = styled.div`
  background-color: #887e92;
  height: 7vh;
  width: 15vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  position: sticky;

  img {
    width: 5vw;
  }

  h3 {
    color: white;
    margin-left: 1vw;
  }
`

export const ContainerMain = styled.div`
  display: flex;
`
export const ContainerPrincipal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContainerEsquerda = styled.div`
  width: 18vw;
`

export const ContainerCentro = styled.div`
  width: 55vw;
`

export const ContainerDireita = styled.div`
  width: 24vw;
`

export const ContainerFooter = styled.footer`
  align-self: stretch;
  height: 9vh;
  text-align: center;
  background-color: #887e92;

  p {
    color: white;
  }
    img {
      width: 1vw;
      margin-right: 1.2vw;
  }
  a {
    text-decoration: none;
  }
`