import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Div = styled.div`

`


const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luian-costa-silveira/person'
const url1 = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luian-costa-silveira/choose-person'

export default function Home(props) {

    const [profile, setProfile] = useState({})

    useEffect(() => {
        getProfile()
    }, []) //useEffect sempre recebe 2 parametros

    const getProfile = () => {
        axios.get(url)
            .then((res) => {
                setProfile(res.data.profile)
            }).catch((err) => {
                alert('ERROOOOOOO!!!!')
            })
    }

    const escolhePessoa = (boolean) => {
        const body = {
            id: profile.id,
            escolha: boolean
        }
        axios.post(url1, body)
            .then((res) => {
                getProfile()
            })
            .catch((err) => {
                alert('ERROOOOOOO')
            })
    }

    return (
        <Div>
            <button onClick={props.irParaMatches}>AQUI É UM BOTAO</button>
            <img src={profile.photo} />
            <h1>{profile.name}, {profile.age}</h1>
            <p>{profile.bio}</p>
            <button onClick={() => escolhePessoa(true, profile.id)}>QUERO</button>
            <button onClick={() => escolhePessoa(false, profile.id)}>NAO QUERO</button>
        </Div>
    )
}