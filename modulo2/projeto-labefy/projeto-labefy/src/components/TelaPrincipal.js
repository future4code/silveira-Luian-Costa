import React from "react";

export default class TelaPrincipal extends React.Component{
    render(){
        return(
            <div>
                <h1>Essa é a home</h1>
                <button onClick={this.props.irParaTelaPlaylists}> Playlists </button>
                <button onClick={this.props.irParaCriarPlaylists}> Criar Playlist </button>
            </div>
        )
    }
}

