import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
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

export function LoginPage() {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goAdminHomePage = () => {
        navigate("/admin/trips/list")
    }

    const [email, setEmail] = useState("")

    const onChangeEmail = (event) => {
        setEmail(event.target.value)
    }

    const [password, setPassword] = useState("")

    const onChangePassword = (event) => {
        setPassword(event.target.value)
    }

    const login = () => {
        const body = {
            email: email,
            password: password
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luian-costa-silveira/login", body)
            .then((response) => {
                console.log(response.data.token)
                localStorage.setItem("token", response.data.token)
                goAdminHomePage()
            })
            .catch((err) => {
                alert("Ocorreu um erro, por favor tente novamente")
            })
    }

    return (
        <DivContainer>
            <h1>Entrar</h1>
            <input type="email" placeholder="E-mail" value={email} onChange={onChangeEmail}></input>
            <input type="password" placeholder="Senha" value={password} onChange={onChangePassword}></input>
            <DivBotoes>
                <button onClick={goBack}>Voltar</button>
                <button onClick={login}>Login</button>
            </DivBotoes>
        </DivContainer>
    )
}