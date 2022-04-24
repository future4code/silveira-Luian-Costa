import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components' 
import Home from './components/Home/Home.js'
import Matches from './components/Matches/Matches.js'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luian-costa-silveira/person'
const url1 = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luian-costa-silveira/choose-person'

export default function Home(){

    const [perfil, setPerfil] = useState({})

    useEffect(() =>{
        getPerfil()
    }, []) //useEffect sempre recebe 2 parametros

    const getPerfil = () =>{
        axios.get(url)
        .then((res)=>{
            setPerfil(res.data.perfil)
        }).catch((err)=>{
            alert('ERROOOOOOO!!!!')
        })
    }

    const escolhePessoa = (boolean) => {
        getPerfil()
        const headers = {
            escolha: escolha,
            id: perfil
        }axios.post(url1, body)
        .then((res)=>{})
        .catch((err)=>{
            alert('ERROOOOOOO')
        })
    }

    return(
        <div>
            <button onClick={props.irParaMatches}>🔥</button>
            <img src={profile.photo} />
            <h2>{profile.name}, {profile.age}</h2>
            <p>{profile.bio}</p>
            <button onClick={() => choosePerson(true, profile.id)}>👍</button>
             <button onClick={() => choosePerson(false, profile.id)}>👎</button>
        </div>
    )
}