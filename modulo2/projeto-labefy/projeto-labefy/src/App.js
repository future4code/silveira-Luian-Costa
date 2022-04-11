import React from 'react';
import TelaPrincipal from './components/TelaPrincipal';
import CriarPlaylists from './components/CriarPlaylist';
import TelaPlaylists from './components/TelaPlaylists';
import DetalhesPlaylist from './components/DetalhesPlaylist';

export default class App extends React.Component {
  state = {
    telaAtual: "telaPrincipal",
    idPlaylist: "",
    namePlaylist: "",
  }

  escolheTela = () => {
    switch (this.state.telaAtual) {
      case "telaPrincipal":
        return <TelaPrincipal irParaCriarPlaylists={this.irParaCriarPlaylists} irParaTelaPlaylists={this.irParaTelaPlaylists} />
      case "telaPlaylists":
        return <TelaPlaylists irParaHome={this.irParaHome} irParaCriarPlaylists={this.irParaCriarPlaylists} />
      case "criarPlaylists":
        return <CriarPlaylists irParaHome={this.irParaHome} irParaTelaPlaylists={this.irParaTelaPlaylists} />
      case "detalhes":
        return <DetalhesPlaylist idPlayList={this.state.idPlayList} namePlaylist={this.state.namePlaylist} irParaHome={this.irParaHome} />
      default:
        return <>Erro! Página não encontrada:(</>
    }
  }

  irParaTelaPlaylists = () => {
    this.setState({ telaAtual: "telaPlaylists" })
  }

  irParaCriarPlaylists = () => {
    this.setState({ telaAtual: "criarPlaylists" })
  }

  irParaHome = () => {
    this.setState({ telaAtual: "telaPrincipal" })
  }
  irParaDetalhes = (id, name) => {
    this.setState({ telaAtual: "detalhes", idPlayList: id, namePlaylist: name })
  }


  render() {
    return (
      <>
        {this.escolheTela()}
      </>
    )
  }
}