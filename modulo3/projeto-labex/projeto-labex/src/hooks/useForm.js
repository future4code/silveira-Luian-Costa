import { useState } from "react";

export const useForm = (initialScale) => {
    const [form, setForm] = useState(initialScale)

    const onChange = (event) => {
        const { name, value } = event.targe;
        setForm({ ...form, [name]: value })
    }

    const cleanFields = () => {
        setForm(initialScale)
    }

    return {form, onChange, cleanFields}
}