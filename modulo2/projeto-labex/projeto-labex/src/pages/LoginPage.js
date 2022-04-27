import React from "react";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <p>
                LoginPage
            </p>
            <button onClick={goBack}>VOLTAR</button>
            <button>ENTRAR</button>
        </div>
    )
}