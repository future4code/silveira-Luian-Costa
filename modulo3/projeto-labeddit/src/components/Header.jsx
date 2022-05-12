import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToLoginPage } from "../routes/Coordinator";
import { ContainerHeader } from "./styled";

export const Header = () => {
    const navigate = useNavigate()

    return (
        <ContainerHeader>
            <h1 onClick={() => goToFeedPage(navigate)}>LabEddit</h1>
            <button onClick={() => goToLoginPage(navigate)}>Login</button>
        </ContainerHeader>
    )
}