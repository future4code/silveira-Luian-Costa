import React from "react";
import axios from "axios";

export default class CriarPlaylists extends React.Component{
    state ={
        nomePlaylist: "" 
    }

    guardaNomePlaylist = (e) => {
        this.setState({nomePlaylist: e.target.value}) 
    }

    CriarPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        const body = {
            name: this.state.nomePlaylist
        }

    axios.post(url, body, {
        headers: {
            Authorization: "luian-costa-silveira"
        }
    })
    .then((res) =>{
        alert("Playlist criada com sucesso!")
        this.setState({nomePlaylist: ""}) //limpa nome da playlist após criação
    })

    .catch((err) => {
        alert("Ocorreu um erro. Tente novamente")
    })
}

    render(){
        return(
            <div>
                <h1>Criar Playlist</h1>
                <input placeholder="Nome da Playlist" value={this.state.nomePlaylist} onChange={this.guardaNomePlaylist}></input>
                <button onClick={this.CriarPlaylist}> Criar </button> 
                <button onClick={this.props.irParaHome}> Home </button>
                <button onClick={this.props.irParaTelaPlaylists}> Playlists </button>
            </div>
        )
    }
}

