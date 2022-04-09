import React from "react";
import axios from "axios";

export default class TelaPlaylists extends React.Component{
    state ={
        mostrar: []
    }

    mostraPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "luian-costa-silveira"
            }
        })
    .then((res) => {
        this.setState({mostrar: res.data})
    })
    .catch((err) => {
        alert("Ocorreu um erro. Tente novamente.")
    })
}

    render(){
        const playlistNaTela = this.state.mostrar.map((musicas) => {

        })
        return(
            <div>
                <h1> Playlists </h1>
                <div> {playlistNaTela} </div>
                <button onClick={this.props.irParaHome}> Home </button>
                <button onClick={this.props.irParaCriarPlaylists}> Criar Playlist </button>
            </div>
        )
    }
}

