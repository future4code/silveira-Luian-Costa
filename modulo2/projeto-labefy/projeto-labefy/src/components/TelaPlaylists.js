import React from "react";

export default class TelaPlaylists extends React.Component{
    render(){
        return(
            <div>
                <h1>Tela das Playlists</h1>
                <button onClick={this.props.irParaHome}> Home </button>
                <button onClick={this.props.irParaCriarPlaylists}> Criar Playlist </button>
            </div>
        )
    }
}

