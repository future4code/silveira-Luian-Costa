import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../hooks/useProtectedPage"
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
    width: 450px;
    margin-top: 20px;
    button{
        margin: 0 15ox;
        color: white;
        width: 120px;
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

const DivLista = styled.div`
    display: flex;
    flex-direction: column;
    background-color: Transparent;
    border: 2px solid #fff;
    border-radius: 6px;
    box-shadow: 0 0 2px #fff,
                0 0 2px #fff,
                0 0 2px #bc13fe,
                0 0 2px #bc13fe,
                0 0 2px #bc13fe,
                inset 0 0 1.3rem #bc13fe;
    div{
        display: flex;
        flex-direction: row;
        margin: 10px;
        width: auto;
        height: auto;
        font-size: 23px;
        font-weight: bold;
    }
`

export const AdminHomePage = () => {
    useProtectedPage()

    const navigate = useNavigate()

    const [trips, setTrips] = useState([])

    const getTripDetail = (id) => {
        navigate(`/admin/trips${id}`)
    }

    const goBack = () => {
        navigate("/")
    }

    const goToCreateTripPage = () => {
        navigate("/admin/trips/create")
    }

    useEffect(() => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luian-costa-silveira/trips"
        axios.get(url)
            .then((res) => {
                setTrips(res.data.trips)
            }).catch((err) => {
                alert("Ocorreu um erro, tente novamente!")
            })
    }, [])

    const deleteTrip = (id) => {
        const token = localStorage.getItem("token")
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/luian-costa-silveira/trips/${id}`
        const headers = {
            auth: token
        }
        axios.delete(`${url}/trips/${id}`, headers)
            .then((res) => {
                console.log(res)
                alert("Viagem Deletada")
            }).catch((err) => {
                alert(err)
            })
    }

    const tripsList = trips.map((trip) => {
        return(
            <div>
                <div onClick={() => getTripDetail(trip.id)}>{trip.name}</div>
                <div onClick={() => deleteTrip(trip.id)}>X</div>
            </div>
        )
    })

    return (
        <DivContainer>
            <h1>Painel Administrativo</h1>
            <DivLista>
                {tripsList}
            </DivLista>
            <DivBotoes>
                <button onClick={goBack}>VOLTAR</button>
                <button onClick={goToCreateTripPage}>CRIAR VIAGEM</button>
                <button>LOGOUT</button>
            </DivBotoes>
        </DivContainer>
    )
}