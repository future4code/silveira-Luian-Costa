import styled from "styled-components";
import { primaryColor } from "../../constants/colors";

export const ContainerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 25px auto;
    max-width: 450px;
    width: 150vw;
    border: 2px solid black;
    border-radius: 8px;
    height: auto;
    align-items: center;
    text-align: center;
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
    h1{
        width: 100%;
    }
`