import React from "react";
import { Header } from "../../components/Header";
import logo from "../../assets/logo-reddit.gif"
import { ContainerDiv, LogoImage, InputsDiv, Form } from "./styled";
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
    const [form, onChange, clearFields] = useForm({email: "", password: ""})

    const onSubmitForm = () => {

    }

    return (
        <div>
            <Header />
            <ContainerDiv>
                <LogoImage src={logo} />
                <h1>Dive into anything</h1>
                <InputsDiv>
                    <Form onSubmit={onSubmitForm()}>
                        <input 
                            name="email"
                            value={form.email}
                            onChange={onChange}
                            placeholder="E-mail"
                            required
                            type={"email"}
                        />

                        <input
                            name="password"
                            value={form.password}
                            onChange={onChange}
                            placeholder="Password"
                            required
                            type={"password"}
                        />
                        <button type={"submit"}>Login</button>
                    </Form>
                </InputsDiv>
            </ContainerDiv>
        </div>
    )
}