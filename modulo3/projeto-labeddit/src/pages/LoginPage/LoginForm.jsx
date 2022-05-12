import React from "react";
import { InputsDiv, Form } from "./styled";
import { useForm } from "../../hooks/useForm";
import { login } from "../../services/user"
import { useNavigate } from "react-router-dom";

export const LoginForm = () => {
    const navigate = useNavigate()

    const [form, onChange, clearFields] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
        login(form, clearFields, navigate)
    }

    return (
        <div>
            <InputsDiv>
                <Form onSubmit={onSubmitForm}>
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
        </div>
    )
}