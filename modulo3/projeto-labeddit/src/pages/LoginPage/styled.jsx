import styled from "styled-components";
import { primaryColor, secondaryColor } from "../../constants/colors";

export const ContainerDiv = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`

export const LogoImage = styled.img`
    width: 70vw;
    max-width: 350px;
    
`

export const InputsDiv = styled.div`
    display: flex;
    button{
        background-color: ${secondaryColor};
        color: white;
        width: 100%;
        height: 34px;
        cursor: pointer;
        transition-duration: 0.5s;
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
        border: none;
        border-radius: 2px;
        :hover{
        background-color: ${primaryColor};
        }
    }
`

export const Form = styled.form`
    input{
        width: 100%;
        padding: 12px 20px;
        margin: 8px 0;
        box-sizing: border-box;
        border: 3px solid ${secondaryColor};
        -webkit-transition: 0.5s;
        transition: 0.5s;
        outline: none;
    }
    input:focus {
        border: 3px solid ${primaryColor};
      }
`