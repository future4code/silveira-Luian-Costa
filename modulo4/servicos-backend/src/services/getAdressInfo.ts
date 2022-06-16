import axios from "axios"
import { Address } from "../types/typeAddress"

export const getAdress = async (cep: string) => {
    try {
        const result = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)

        const address: Address = {
            cep: result.data.cep,
            logradouro: result.data.logradouro,
            complemento: result.data.complemento,
            numero: result.data.ibge,
            bairro: result.data.bairro,
            cidade: result.data.localidade,
            estado: result.data.uf
        }
        return (address)
    } catch (error: any) {
        console.log("ERRO")
    }
}