import React, { useState } from "react";
import Home from './components/Home/Home.js'
import Matches from './components/Matches/Matches.js'

export default function App() {

  const [home, setPagina] = useState('home')

  const irParaHome = () => {
    setPagina('home')
  }

  const irParaMatches = () => {
    setPagina('matches')
  }

  const escolheTela = () => {
    switch (home) {
      case 'home':
        return <Home irParaMatches={irParaMatches} />
      case 'matches':
        return <Matches irParaHome={irParaHome} />
    }
  }
  return (
    <div>
      {escolheTela()}
    </div>
  );
}
