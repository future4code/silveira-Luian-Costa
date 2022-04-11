import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

const ContainerDiv = styled.div`
    background-color: #151515;
    height: 100vh;
    font-family: 'Tahoma';
`

const Div = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items: center;
    border: 3px solid chartreuse;
    padding: 30px;
    border-radius: 10px;
    width: 500px;
    height: 250px;
    h1{
        color: chartreuse;
        text-decoration: underline;
    }
    button{
        color: chartreuse;
        background-color: #555555;
        border: none;
        font-size: 20px;
        margin-top: 30px;
        padding: 10px 24px;
        border-radius: 10px;
    }
    button:hover {
        background-color: #4CAF50;
        color: white;
      }
    input{
        width: 200px;
        padding: 10px;
        border: none;
        background-color: white;
        color: black;
    }
`

const body = {
    nome: this.state.musica,
    artista: this.state.artista,
    url: this.state.url,
}
const headers = {
    headers: {
        Authorization: "luian-costa-silveira"
    }
}
const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.props.idPlayList}/tracks`

export default class DetalhesPlaylist extends React.Component{
    state ={
        musica: '',
        artista:'',
        url:'',
        detalhes:[]
    }

    componentDidMount(){
        this.detalhesPlaylist();
}

    nomeMusica = (e) => {
        this.setState({musica: e.target.value});
}
    nomeArtista = (e) => {
        this.setState({artista: e.target.value});
}
    linkUrl = (e) => {
        this.setState({url: e.target.value});
 }

    adicionaMusica = () => {
        axios.post(url, body, headers)
    .then((res) => {
        this.setState({musica:'', artista:'', url:''})
    })
    .catch((err) => {
        alert("Ocorreu um erro. Tente novamente.")
    })
}

    detalhesPlaylist = () => {
        axios.get(url, headers)
    .then((res) => {
        this.setState({detalhes: res.data.result.tracks});
    })
    .catch((err) => {
        alert("Ocorreu um erro. Tente novamente.");
    })
}

    render(){
        const detalhes = this.state.detalhes.map((mostra) => {
            return(
                <div key={mostra.id}>
                    <p>Música:{mostra.nome}</p>
                    <p>Artista:{mostra.artista}</p>
                </div>
            )
        })
    return(
        <ContainerDiv>
        <Div>
                <h1>Musicas</h1>
                <input
                    placeholder={"Nome da Música"}
                    value={this.state.musica}
                    onChange={this.nomeMusica}
                />
                <input
                    placeholder={"Nome do Artista"}
                    value={this.state.artista}
                    onChange={this.nomeArtista}
                />
                <input
                    placeholder={"Url da Música"}
                    value={this.state.url}
                    onChange={this.linkUrl}
                />
                <button onClick={this.adicionaMusica}>Adicionar</button>
                <h2>Detalhes da Playlist</h2>
                    {detalhes}
                <button onClick={this.props.irParaHome}> Home </button>
        </Div>
        </ContainerDiv>
        )
    }
}