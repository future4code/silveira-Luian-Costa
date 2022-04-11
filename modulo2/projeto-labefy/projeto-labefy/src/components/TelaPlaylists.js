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
`
const DivElementos = styled.div`
    margin-bottom: 10px;
    background-color: gray;
    padding: 50px;
    border-radius: 10px;
`
const DivMusicas = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

`

export default class TelaPlaylists extends React.Component {
    state = {
        mostrar: []
    }

    componentDidMount() {
        this.mostraPlaylist();
    }

    mostraPlaylist = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
        axios.get(url, {
            headers: {
                Authorization: "luian-costa-silveira"
            }
        })
            .then((res) => {
                this.setState({ mostrar: res.data.result.list });
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente.");
            })
    }

    deletarPlaylist = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "luian-costa-silveira"
            }
        })
            .then((res) => {
                alert("Playlist apagada com sucesso")
                this.mostraPlaylist();
            })
            .catch((err) => {
                alert("Ocorreu um erro. Tente novamente.");
            })
    }

    render() {
        const playlistNaTela = this.state.mostrar.map((musicas) => {
            return <div key={musicas.id}>
                <DivMusicas>
                    {musicas.name}
                    <button onClick={() => this.deletarPlaylist(musicas.id)}>X</button>
                </DivMusicas>
            </div>
        })

        return (
            <ContainerDiv>
                <Div>
                    <h1> Playlists </h1>
                    <DivElementos>
                        {playlistNaTela}
                    </DivElementos>
                    <button onClick={this.props.irParaHome}> Home </button>
                    <button onClick={this.props.irParaCriarPlaylists}> Criar Playlist </button>
                    <button onClick={this.props.DetalhesPlaylist}> Detalhes </button>
                </Div>
            </ContainerDiv>
        )
    }
}

