import styled from "styled-components";
import { primaryColor, secondaryColor } from "../constants/colors";

export const ContainerHeader = styled.div`
    margin: 0;
    color: white;
    background-color:${primaryColor};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    h1{
        margin: 15px;
        color: ${secondaryColor};
        cursor: pointer;
    }
    button {
        background-color: ${secondaryColor};
        border: none;
        color: white;
        padding: 15px 50px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
        margin-right: 15px;
        border-radius: 10px;
        cursor: pointer;
      }
`
