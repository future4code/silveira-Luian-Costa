import React from 'react';
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
`

export default class TelaPrincipal extends React.Component {
    render() {
        return (
            <ContainerDiv>
                <Div>
                    <h1>Labefy</h1>
                    <button onClick={this.props.irParaTelaPlaylists}> Playlists </button>
                    <button onClick={this.props.irParaCriarPlaylists}> Criar Playlist </button>
                </Div>
            </ContainerDiv>
        )
    }
}

