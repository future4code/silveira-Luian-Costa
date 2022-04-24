import React, {useState} from "react";
import Home from './components/Home/Home.js'
import Matches from './components/Matches/Matches.js'

export default function App() {

  const [home, setPagina] = useState('tela')

  const irParaHome = () =>{
    setPagina('home')
  }

  const irParaMatches = () =>{
    setPagina('matches')
  }

  const escolheTela = () =>{
    switch(tela){
      case 'home':
        return <Home irParaMatches={irParaMatches}/>
      case 'matches':
        return <Matches irParaHome={irParaHome}/>
    }
  }
  return (
    <div className="App">
      {escolheTela()}
    </div>
  );
}
