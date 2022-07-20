import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { productInputDTO } from "../types/productInputDTO";

export class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) { }

    public insertProduct = async (req: Request, res: Response) => {
        try {
            const { name, tags } = req.body

            const input: productInputDTO = {
                name,
                tags
            }

            await this.productBusiness.insertProduct(input)
            res.status(201).send({ message: "Produto inserido no banco de dados" })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    }

    public getProduct = async (req: Request, res: Response) => {
        try {
            const id = req.query.id as string
            const name = req.query.name as string
            const tag = req.query.tag as string

            const result = await this.productBusiness.getProduct(id, name, tag)
            res.status(200).send(result)
        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}