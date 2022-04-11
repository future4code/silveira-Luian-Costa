import React from 'react';
import axios from 'axios';
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
    height: 350px;
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

export default class CriarPlaylists extends React.Component{
    state ={
        nomePlaylist: "" 
    }

    guardaNomePlaylist = (e) => {
        this.setState({nomePlaylist: e.target.value});
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
        alert("Playlist criada com sucesso!");
        this.setState({nomePlaylist: ""}); //limpa nome da playlist após criação
    })

    .catch((err) => {
        alert("Ocorreu um erro. Tente novamente");
    })
}

    render(){
        return(
            <ContainerDiv>
                <Div>
                    <h1>Criar Playlist</h1>
                    <input placeholder="Nome da Playlist" value={this.state.nomePlaylist} onChange={this.guardaNomePlaylist}></input>
                    <button onClick={this.CriarPlaylist}> Criar </button> 
                    <button onClick={this.props.irParaHome}> Home </button>
                    <button onClick={this.props.irParaTelaPlaylists}> Playlists </button>
                </Div>
            </ContainerDiv>
        )
    }
}

