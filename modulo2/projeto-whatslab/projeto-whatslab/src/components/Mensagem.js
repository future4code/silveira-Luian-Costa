import React from 'react'
import styled from "styled-components"

//Estilização mensagem enviada
//Nome:

const DivNome = styled.div`
    width: 90px;
    font-weight: bold; 
`

//Texto
const DivMensagem = styled.div`
    width: 650px;
`

//Caixa de Chat
const DivChat = styled.div`
    display: flex;
    padding: 0 10px;
`
export default class Mensagem extends React.Component {
    render() {
        return <DivChat>
            <DivNome>{`${this.props.mostrar.nome}:`}</DivNome>
            <DivMensagem>{this.props.mostrar.mensagem}</DivMensagem>
        </DivChat>
    }
}