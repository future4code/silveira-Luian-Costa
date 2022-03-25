import React from 'react'
import Mensagem from './components/Mensagem'
import styled from "styled-components";

const CaixaTexto = styled.div` 
  border: 2px solid black;
  border-radius: 5px;
  margin: auto; 
  padding: 5px;
  width: 620px;
  height: 900px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const InputNome = styled.input`
  width: 90px;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
`;
const InputMensagem = styled.input`
  width: 430px;
  font-weight: bold;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
`;
const BotaoEnviar = styled.button`
  font-weight: bold;
  border: 2px solid black;
  border-radius: 5px;
  padding: 5px;
  width: 65px
`;

export default class App extends React.Component {
  state = {
    nome: "",
    mensagem: "",
    historico: [],
  }


  digitaNome = (event) => {
    this.setState({
      nome: event.target.value
    })
  }

  digitaMensagem = (event) => {
    this.setState({
      mensagem: event.target.value
    })
  }

  EnviarMensagem = () => {
    const novaMensagem = {
      nome: this.state.nome,
      mensagem: this.state.mensagem
    }
    this.setState({
      historico: [...this.state.historico, novaMensagem]
    })
    this.state.mensagem = ""
  }

  render() {
    const historico = this.state.historico.map(
      (mensagem) => {
        return (
          <Mensagem mostrar={mensagem} />
        )
      }
    )
    return (
      <CaixaTexto>
        {historico}
        <div>
          <InputNome value={this.state.nome} onChange={this.digitaNome} placeholder={"Nome"}></InputNome>

          <InputMensagem value={this.state.mensagem} onChange={this.digitaMensagem} placeholder={"Digite a mensagem"}></InputMensagem>

          <BotaoEnviar onClick={this.EnviarMensagem}>Enviar</BotaoEnviar>
        </div>
      </CaixaTexto>
    );
  }
}