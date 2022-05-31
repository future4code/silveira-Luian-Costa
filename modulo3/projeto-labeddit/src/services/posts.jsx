import axios from "axios";
import { BASE_URL } from "../constants/urls";

const headers = {
    headers:
        { authorization: localStorage.getItem("token") }
}

export const createPost = (body) => {
    axios.post(`${BASE_URL}/posts`, body, headers)
    .then((response) => {
        console.log(response.data.message)
        alert("Post criado com sucesso!")
    })
    .catch((error) => {
        alert("Algo deu errado: ", error.response)
    })
}