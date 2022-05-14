import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const CardContainer = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: center;
    margin: 0 auto;
    max-width: 550px;
    width: 100vw;
    margin-top: 16px;
    border: 2px solid black;
    border-radius: 8px;
    height: auto;
    align-items: center;
    text-align: center;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
`

export const DivCard = styled.div`
    background-color: white;
    height: 200px;
    width: 100%;
    color: ${secondaryColor};
    h1{
        font-size: 15px; 
        background-color: ${primaryColor};
        height: 35px;
        border-bottom: 2px solid black;
        margin: 0;
    }
    h2{
        font-size: 25px;
        margin: 0;
    }
    p{
        font-size: 20px;
    }
    span{
        font-weight: bold;
    }
`