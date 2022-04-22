import React from "react";
import {useEffect, useState} from "react"
import axios from "axios"

function pokeCard(props){
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        pegaPokemon(props.pokemon)
    }, [props.pokemon])

    const pegaPokemon = pokeName => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
        .then(re => {
            setPokemon(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return(
        <div>
            <p>{pokemon.name}</p>
            <p>{pokemon.weight} kg</p>
            {pokemon.types && <p>{pokemon.types[0].type.name}</p>}
            {pokemon.sprites && (<img src={pokemon.sprites.front_default} alt={pokemon.name}/>)}
        </div>
    )
}

export default pokeCard;