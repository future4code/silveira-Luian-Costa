import React from "react";
import { InputsDiv, Form } from "./styled";
import { useForm } from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

export const SignUpForm = () => {
    const [form, onChange, clearFields] = useForm({ username: "", email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    return (
        <div>
            <InputsDiv>
                <Form onSubmit={onSubmitForm}>
                    <input
                        name="username"
                        value={form.username}
                        onChange={onChange}
                        placeholder="Username"
                        required
                    />

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
                    <button type={"submit"}>SignUp</button>
                </Form>
            </InputsDiv>
        </div>
    )
}