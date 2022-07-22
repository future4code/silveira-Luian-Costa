import { ProductDatabase } from "../data/ProductDataBase";
import { CustomError } from "../errors/CustomError";
import { IdGenerator } from "../services/IdGenerator";
import { newProduct } from "../types/newProduct";
import { productInputDTO } from "../types/productInputDTO";

export class ProductBusiness {
    constructor(
        private productDataBase: ProductDatabase,
        private idGenerator: IdGenerator
    ) { }

    public insertProduct = async (input: productInputDTO) => {
        try {
            const { name, tags } = input

            if (!name || !tags) {
                throw new Error("Parâmetros de produto faltando.")
            }

            const id = this.idGenerator.generateId()

            const newProduct: newProduct = {
                id,
                name,
                tags
            }

            await this.productDataBase.insertProduct(newProduct)
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getProduct = async (id: string, name: string, tag: string) => {
        try {
            const result = await this.productDataBase.getProduct(id, name, tag)
            return result
        } catch (error: any) {
            throw new CustomError(500, error.message)
        }
    }
}