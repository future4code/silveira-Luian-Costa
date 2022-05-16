import React from 'react'
import { DivCard } from '../CardPost/styled'
import { ContainerDiv } from './styled'

export const CardComment = (props) => {
    return (
        <div>
            <DivCard>
                <ContainerDiv>
                    <h1>Usuário: {props.username}</h1>
                    <h3>Comentário: {props.body}</h3>
                </ContainerDiv>
            </DivCard>
        </div>
    )
}