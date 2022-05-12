import React from "react";
import { Header } from "../../components/Header";
import logo from "../../assets/logo-reddit.gif"
import { ContainerDiv, LogoImage } from "./styled";
import { SignUpForm } from "./SignUpForm";
import { useUnprotectedPage } from "../../hooks/useUnprotectedPage";

export const SignUpPage = () => {
    useUnprotectedPage()

    return (
        <div>
            <Header />
            <ContainerDiv>
                <LogoImage src={logo} />
                <h1>Become part of our community!</h1>
                <SignUpForm />
            </ContainerDiv>
        </div>
    )
}