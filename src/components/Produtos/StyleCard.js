import styled from "styled-components"

export const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 298px;
    height: 45vh;
    margin-bottom: 3vh;
    background-color: #d1d1d1;
    border-radius: 5%;
    
   span {
        margin: 0.5vw;
        height: 2vh;
        align-self: start;
    }

    img {
        border-radius: 5% 5% 0 0;
    }
    button {
        margin-top: 1vw;
        padding: 0.5vw;
        width: 70%;
        font: 11px Roboto, sans-serif;
        border: none;
        background-color: #887e92;
        color: white;
        border-radius: 30px;
        cursor: pointer;
    }
`