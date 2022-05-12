import { clear } from "@testing-library/user-event/dist/clear";
import { useState } from "react";

export const useForm = (initialState) => {
    const [form, setForm] = useState(initialState)

    const handleInputChange = (event) => {
        const { value, name } = event.targe
        setForm({ ...form, [name]: value })
    }

    const clearFields = () => {
        setForm(initialState)
    }
    return [form, handleInputChange, clear]
}