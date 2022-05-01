import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage";
import axios from "axios";
import { useForm } from "../hooks/useForm";
import { Planets } from "../constants/planets";
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
const Form = styled.div`
    width: 250px;
    display:flex;
    flex-direction: column;
    border-bottom: 0.2rem solid #fff;
    border-radius: 2rem;
    padding: 50px;
    box-shadow: 0 0 2px #fff,
                0 0 2px #fff,
                0 0 2px #bc13fe,
                0 0 2px #bc13fe,
                0 0 2px #bc13fe,
                inset 0 0 1.3rem #bc13fe;
    input, select{
        margin-top: 10px;
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
    useProtectedPage()

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const { form, onChange, cleanFields } = useForm({
        name: "",
        planet: "",
        date: "",
        description: "",
        durationInDays: ""
    })

    const onSubmitCreateTrip = (event) => {
        event.preventDefault()
        createTrip()
        cleanFields()
    }

    const planetsAvailable = Planets.map((planets) => {
        return <option key={planets} value={planets}>{planets}</option>
    })

    const createTrip = () => {
        const HEADERS = {
            headers: {
                "Content-Type": "application/json",
                "auth": localStorage.getItem("token")
            }
        }
        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/luian-costa-silveira/trips", form, HEADERS)
            .then((res) => {
                alert("Viagem criada com sucesso!!")
                cleanFields()
                navigate("/admin/trips/list")
            }).catch((err) => {
                alert("Ocorreu um erro, tente novamente!!!")
            })
    }

    return (
        <DivContainer>
            <h1>Criar Viagem</h1>
            <Form onSubmit={onSubmitCreateTrip} >
            <input
                name={"name"}
                value={form.name}
                onChange={onChange}
                placeholder="Título da viagem"
                required
            />

            <select
                name={"planet"}
                value={form.planet}
                onChange={onChange}
                placeholder="Planeta"
                required
            >
            <option value="" disabled> Escolha o planeta</option>
                {planetsAvailable}
            </select>

            <input
                name={"date"}
                value={form.date}
                onChange={onChange}
                placeholder="Data"
                type={"date"}
                required
            />

            <input
                name={"description"}
                value={form.description}
                onChange={onChange}
                placeholder="Descrição da Viagem"
                required
            />

            <input
                name={"durationInDays"}
                value={form.durationInDays}
                onChange={onChange}
                type={"number"}
                placeholder="Duração da viagem (dias)"
                required
            />
            </Form>
            <DivBotoes>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={createTrip}>CRIAR</button>
            </DivBotoes>
        </DivContainer>
    )
}