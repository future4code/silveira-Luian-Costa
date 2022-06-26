import { connection } from "../data/connection";
import { Address } from "../types/typeAddress";

export async function insertAddressAdd(address: Address) {
    const { logradouro, bairro, cidade, estado, cep, complemento, numero } = address
    await connection("Address").insert({
        logradouro,
        cep,
        complemento,
        numero,
        bairro,
        cidade,
        estado,
    })
}