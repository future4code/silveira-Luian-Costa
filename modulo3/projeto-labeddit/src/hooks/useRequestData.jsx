import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/urls";
import axios from "axios";

export const useRequestData = (inititalData, url) => {
    const [data, setData] = useState(inititalData)

    useEffect(() => {
        axios.get(url, {
            headers: {
                Authorization: localStorage.getItem("token")
            }
        })
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err)
                alert("Ocorreu um erro!")
            })
    }, [])
    return (data)
}