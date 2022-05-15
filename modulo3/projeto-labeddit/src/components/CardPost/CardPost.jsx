import React from "react";
import { CardContainer, DivCard } from "./styled";

export const CardPost = (props) => {
    return (
        <div>
            <CardContainer onClick={props.onClick}>
                <DivCard>
                    <h1><span>Enviado por: </span>{props.username}</h1>
                    <h2>{props.title}</h2>
                    <p>{props.body}</p>
                </DivCard>
            </CardContainer>
        </div>
    )
}