import express from "express"
import { ProductBusiness } from "../business/ProductBusiness"
import { ProductController } from "../controller/ProductController"
import { ProductDatabase } from "../data/ProductDataBase"
import { IdGenerator } from "../services/IdGenerator"

export const productRouter = express.Router()

const productBusiness = new ProductBusiness(
    new ProductDatabase,
    new IdGenerator
)

const productController = new ProductController(productBusiness)

productRouter.post("/create", productController.insertProduct)