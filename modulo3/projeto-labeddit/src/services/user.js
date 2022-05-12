import { BASE_URL } from "../constants/urls"
import { goToFeedPage } from "../routes/Coordinator";
import axios from "axios";


export const login = (form, clearFields, navigate) => {
    axios.post(`${BASE_URL}/users/login`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            clearFields()
            goToFeedPage(navigate)
        })
        .catch((err) => {
            alert("Ocorreu um erro. Tente Novamente! " + err)
        })
}