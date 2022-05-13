import React from "react";
import { ErrorImage } from "./styled";
import errorImage from "../../assets/reddit-error.jpg"
import { Header } from "../../components/Header/Header";

export const ErrorPage = () => {
    return(
        <div>
            <Header/>
            <ErrorImage src={errorImage}/>
        </div>
    )
}