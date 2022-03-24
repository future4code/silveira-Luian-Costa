import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    post: [
      {
        nomeUsuario: 'du',
        fotoUsuario: 'https://picsum.photos/50/51',
        fotoPost: 'https://picsum.photos/200/150'
      },
      {
        nomeUsuario: 'dudu',
        fotoUsuario: 'https://picsum.photos/50/52',
        fotoPost: 'https://picsum.photos/200/250'
      },
      {
        nomeUsuario: 'edu',
        fotoUsuario: 'https://picsum.photos/50/53',
        fotoPost: 'https://picsum.photos/200/350'
      }
    ],
    valorInputNome: "",
    valorInputFotoPerfil: "",
    valorInputFotoPost: ""

  };
  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value })
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFotoPerfil: event.target.value })
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value })
  };

  adicionarPost = () => {
    const novoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFotoPerfil,
      fotoPost: this.state.valorInputFotoPost
    }

    const atualizaPosts = [novoPost, ...this.state.post]
    this.setState({
      post: atualizaPosts
    })
  }

  render() {
    const arrayDeComponentes = this.state.post.map((item) => {

      return (
        <Post
          {...item}
        />
      )
    })


    return (
      <MainContainer>
         {arrayDeComponentes}
        <div>
          <input
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome"}
          />
          <input
            value={this.state.valorInputFotoPerfil}
            onChange={this.onChangeInputFotoPerfil}
            placeholder={"Foto de Perfil"}
          />
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto do Post"}
          />
        </div>
        <button onClick={this.adicionarPost}>Adicionar</button>

       
      </MainContainer>
    );
  }
}

export default App;