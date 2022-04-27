import React from "react";
import { useNavigate } from "react-router-dom";

export const ListTripsPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }
    const goToApplicationForm = () => {
        navigate("/trips/application")
    }

    return (
        <div>
            <p>
                ListTripsPage
            </p>
            <button onClick={goBack}>VOLTAR</button>
            <button onClick={goToApplicationForm}>INSCREVER-SE</button>
        </div>
    )
}