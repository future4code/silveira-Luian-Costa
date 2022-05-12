import React from "react";
import { ErrorImage } from "./styled";
import errorImage from "../../assets/reddit-error.jpg"

export const ErrorPage = () => {
    return(
        <div>
            <ErrorImage src={errorImage}/>
        </div>
    )
}