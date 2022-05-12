import React from "react";
import { InputsDiv, Form } from "./styled";
import { useForm } from "../../hooks/useForm";

export const LoginForm = () => {
    const [form, onChange, clearFields] = useForm({ email: "", password: "" })

    const onSubmitForm = (event) => {
        event.preventDefault()
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