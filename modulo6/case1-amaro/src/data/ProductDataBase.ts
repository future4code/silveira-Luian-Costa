import { CustomError } from "../errors/CustomError";
import { newProduct } from "../types/newProduct";
import { DataBase } from "./DataBase";

export class ProductDatabase extends DataBase {
    private TABLE_NAME = "Amaro_Products"

    public insertProduct = async (newProduct: newProduct) => {
        try {
            await DataBase.connection(this.TABLE_NAME)
                .insert({
                    id: newProduct.id,
                    name: newProduct.name,
                    tags: newProduct.tags
                })
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }

    public getProduct = async (id: string, name: string, tag: string) => {
        try {
            const [result] = await DataBase.connection.raw(`
            SELECT * FROM Amaro_Products
            WHERE 
                id = "${id}" OR
                name LIKE "%${name}%" OR
                tags LIKE "%${tag}%"
                ORDER BY name;
            `)
            return result
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }
}