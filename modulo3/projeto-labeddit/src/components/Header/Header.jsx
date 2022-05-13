import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage, goToLoginPage } from "../../routes/Coordinator";
import { ContainerHeader } from "./styled";

export const Header = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    const [rightButtonText, setRightButtonText] = useState(token ? "Logout" : "Login")

    const logout = () => {
        localStorage.removeItem("token")
    }

    const rightButtonAction = () => {
        if (token) {
            logout()
            setRightButtonText("Login")
            goToLoginPage(navigate)
        } else {
            goToLoginPage(navigate)
        }
    }

    return (
        <ContainerHeader>
            <h1 onClick={() => goToFeedPage(navigate)}>LabEddit</h1>
            <button onClick={rightButtonAction}>{rightButtonText}</button>
        </ContainerHeader>
    )
}