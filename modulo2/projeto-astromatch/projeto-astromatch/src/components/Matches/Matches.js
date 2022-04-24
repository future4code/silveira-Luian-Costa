import React, {useState, useEffect} from 'react'
import axios from 'axios'
import styled from 'styled-components'

const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luian-costa-silveira/matches'
const clear = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/luian-costa-silveira/clear'

export default function Matches(props) {
    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(url)
        .then((res)=>{
            setMatches(res.data.matches)
        }).catch((err)=>{
            alert('ERROOOOOOO!!!')
        })
    }

    const clearMatch =() =>{
        axios.put(clear)
        .then((res)=>{
            getMatches()
            alert('Matches removidos, quer morrer solteiro(a) mesmo???')
        })
        .catch((err)=>{
            alert('ERROOOOOOO!!!')
        })
    }

    const listaDeMatches = matches.map((person) => {
        return(
            <div>
                <img src={person.photo}/>
                <h1>{person.name}</h1>
            </div>
        )
    })

    return(
        <div>
            {listaDeMatches}
            <button onClick={props.irParaHome}>Aqui volta</button>
            <button onClick={clearMatch}>Limpa Match</button>
        </div>
    )


}