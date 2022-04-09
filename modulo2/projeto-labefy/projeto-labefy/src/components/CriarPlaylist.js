import React from "react";

export default class CriarPlaylists extends React.Component{
    render(){
        return(
            <div>
                <h1>Tela da Criação de Playlist</h1>
                <button onClick={this.props.irParaHome}> Home </button>
                <button onClick={this.props.irParaTelaPlaylists}> Playlists </button>
            </div>
        )
    }
}

