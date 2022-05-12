import React from "react";
import { Header } from "../../components/Header";
import logo from "../../assets/logo-reddit.gif"
import { ContainerDiv, LogoImage } from "./styled";
import { useNavigate } from "react-router-dom";
import { SignUpForm } from "./SignUpForm";

export const SignUpPage = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Header />
            <ContainerDiv>
                <LogoImage src={logo} />
                <SignUpForm />
            </ContainerDiv>
        </div>
    )
}