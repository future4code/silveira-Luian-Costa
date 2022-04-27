import React from "react";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
    const navigate = useNavigate()

    const goToLoginPage = () => {
        navigate("/login")
    }

    const goToListTrips = () => {
        navigate("/trips/list")
    }

    return (
        <div>
            <p>
                HomePage
            </p>
            <button onClick={goToLoginPage}>ADMIN</button>
            <button onClick={goToListTrips}>VIAGENS</button>
        </div>
    )
}