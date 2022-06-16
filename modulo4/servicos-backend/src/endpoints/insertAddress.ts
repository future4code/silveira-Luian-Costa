import { Request, Response } from "express";
import { insertAddressAdd } from "../data/insertAddressAdd";
import { getAdress } from "../services/getAdressInfo";


export const insertAddress = async (req: Request, res: Response) => {
    try {
        const endereco = req.params.cep

        const address = await getAdress(endereco)
        if (!address) {
            throw new Error("Parâmetro inválido")
        }
        await insertAddressAdd(address)
        res.status(200).send("Sucesso!!!")
    } catch (error: any) {
        res.status(500).send("Ocorreu um erro")
    }
}