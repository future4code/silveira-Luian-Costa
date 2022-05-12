import React from "react";
import { Header } from "../../components/Header";
import logo from "../../assets/logo-reddit.gif"
import { ContainerDiv, LogoImage } from "./styled";
import { LoginForm } from "./LoginForm";
import { goToSignUpPage } from "../../routes/Coordinator";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Header />
            <ContainerDiv>
                <LogoImage src={logo} />
                <h1>Dive into anything</h1>
                <LoginForm />
                <div onClick={() => goToSignUpPage(navigate)}>Don't have an account? SignUp</div>
            </ContainerDiv>
        </div>
    )
}