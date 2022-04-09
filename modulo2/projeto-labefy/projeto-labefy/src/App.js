import React from 'react';
import TelaPrincipal from './components/TelaPlaylists';
import CriarPlaylists from './components/CriarPlaylist';
import TelaPlaylists from './components/TelaPlaylists';

export default class App extends React.Component{
  state = {
    telaAtual: "principal",
  }

  escolheTela = () => {
    switch (this.state.telaAtual){
      case "principal":
        return <TelaPrincipal/>
      case "telaPlaylists":
        return <TelaPlaylists/>
      case "criarPlaylists":
        return <CriarPlaylists/>
      default:
        return <>Erro! Página não encontrada:(</>
    }
  }

  render(){
    return (
      <>
      {this.escolheTela()}
      </>
    )
  }
}