import React from "react";
import { CardContainer } from "./styled";

export const CardPost = (props) => {
    return (
        <div>
            <CardContainer>
                {props.username}
                {props.title}
                {props.body}
            </CardContainer>
        </div>
    )
}