import React from "react"
import { useState, useEffect} from "react"
import axios from "axios"
import PokeCard from "./components/Pokecard/PokeCard"
import { render } from "@testing-library/react"

function App(){
  const {pokeList, setPokeList} = useState([])
  const [pokeName, setPokeName] = useState('')

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      setPokeList(response.data.results)
    })
    .catch(err => {
      console.log(err)
    })
  })

  changePokeName = event =>{
    setPokeName(event.target.value)
  }

  return(
    <div className="App">
      <select onChange={changePokeName}>
        <option value={""}>Nenhum</option>
        {pokeList.map(pokemon =>{
          return(
            <option key={pokemon.name} value={pokemon.name}>{pokemon.name}</option>
          )
        })}
      </select>
    </div>
  )
}

export default App;