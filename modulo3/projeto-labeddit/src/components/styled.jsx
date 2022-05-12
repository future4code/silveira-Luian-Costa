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
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.2), 0 2px 8px 0 rgba(0,0,0,0.19);
    h1{
        margin: 15px;
        color: ${secondaryColor};
        cursor: pointer;
    }
    button {
        background-color: ${secondaryColor};
        border: none;
        color: white;
        height: 40px;
        width: 150px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 18px;
        margin-right: 15px;
        border-radius: 10px;
        cursor: pointer;
      }
`
