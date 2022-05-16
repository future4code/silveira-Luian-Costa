import styled from "styled-components";
import { secondaryColor } from "../../constants/colors";

export const DivForm = styled.div`
    display: flex;
    width: 100%;
    height: 100px;
`

export const Form = styled.div`
    display: flex;
    margin: 30px auto;
    input{
        border: 1px solid black;
    }
    textarea{
        border: 1px solid black;
    }
    button {
        background-color: ${secondaryColor};
        border: none;
        color: white;
        height: 35px;
        width: 100px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin-right: 15px;
        border-radius: 10px;
        cursor: pointer;
      }
`