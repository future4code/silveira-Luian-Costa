import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const DivContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1{
        text-decoration: underline;
        margin-top: 25vh;
        border-bottom: 0.2rem solid #fff;
        border-radius: 2rem;
        padding: 50px;
        box-shadow: 0 0 2px #fff,
                    0 0 2px #fff,
                    0 0 2px #bc13fe,
                    0 0 2px #bc13fe,
                    0 0 2px #bc13fe,
                    inset 0 0 1.3rem #bc13fe;
    }
`
const DivBotoes = styled.div`
    display: flex;
    justify-content: space-between;
    width: 350px;
    margin-top: 20px;
    button{
        color: white;
        width: 150px;
        height: 35px;
        background-color: Transparent;
        border: 2px solid #fff;
        border-radius: 6px;
        box-shadow: 0 0 2px #fff,
                    0 0 2px #fff,
                    0 0 2px #bc13fe,
                    0 0 2px #bc13fe,
                    0 0 2px #bc13fe,
                    inset 0 0 1.3rem #bc13fe;
                    cursor: pointer;

`

export const CreateTripPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const createTrip = () => {
        alert("Viagem Criada!!")
    }

    return (
        <DivContainer>
            <h1>Criar Viagem</h1>
            <DivBotoes>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={createTrip}>CRIAR</button>
            </DivBotoes>
        </DivContainer>
    )
}