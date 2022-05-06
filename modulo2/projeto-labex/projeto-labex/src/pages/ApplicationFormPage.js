import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

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

export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const form = () => {
        alert("Formulário Enviado")
    }

    // const [trips, setTrips] = useState([])

    // const applyToTrip = () => {
    //     const body = {
    //         "name": "Astrodev",
    //         "age": 20,
    //         "applicationText": "Quero muuuuuuito ir!!!",
    //         "profession": "Chefe",
    //         "country": "Brasil"
    //     }
    //     axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips/luian-costa-silveira/apply")
    //         .then((res) => {

    //         }).catch((err) => {
    //             alert("ERRO!!!")
    //         })
    // }

    // useEffect(() => {
        
    // })

    return (
        <DivContainer>
            <h1>Formulario</h1>
            <option placeholder="OPTION"></option>
            <input placeholder="NOME"></input>
            <input placeholder="IDADE"></input>
            <input placeholder="TEXTO DE CANDIDATURA"></input>
            <input placeholder="PROFISSAO"></input>
            <input placeholder="ESCOLHA UM PAÍS"></input>
            <DivBotoes>
                <button onClick={goBack}>VOLTAR</button>
                <button oncClick={form}>ENVIAR</button>
            </DivBotoes>
        </DivContainer>
    )
}