import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const TripDetailsPage = () => {

    const navigate = useNavigate()

    useEffect(() =>{
        const token = localStorage.getItem("token");
        
        if(token === null){
            console.log("Não está logado!!!")
            useNavigate.push("./login") //arrumar
        }
    })

    return (
        <div>
            <h1>
                Detalhes das Viagens
            </h1>
        </div>
    )
}