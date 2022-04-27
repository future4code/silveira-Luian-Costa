import React from "react";
import { useNavigate } from "react-router-dom";

export const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }


    return (
        <div>
            <p>
                ApplicationFormPage
            </p>
            <button onClick={goBack}>VOLTAR</button>
            <button>ENVIAR</button>
        </div>
    )
}