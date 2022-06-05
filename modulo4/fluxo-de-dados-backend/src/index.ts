import express from "express";
import cors from "cors";
import { arrayProducts } from "./data";

const app = express();

app.use(express.json());
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//Exercício 1

app.get("/test", (req, res) => {
    res.status(200).send("API FUNCIONAL!!!!!!")
})

//Exercício 3

app.post("/product/create", (req, res) => {
    try {
        const product = {
            id: Date.now().toString(),
            name: req.body.name,
            price: req.body.price
        }
        if (!req.body.price || !req.body.name) {
            throw new Error("Preencha corretamente os dados do produto")
        }
        if (req.body.price <= 0) {
            throw new Error("O preço não está correto")
        }
        arrayProducts.push(product)
        res.send(arrayProducts)
    }
    catch (error: any) {
        switch (error.message) {
            case "Preencha corretamente os dados do produto":
                res.status(422)
                break
            case "O preço não está correto":
                res.status(422)
                break
            default:
                res.status(500)
                break
        }
        res.send(error.message)
    }
})

//Exercício 4

app.get("/products", (req, res) => {
    res.status(200).send(arrayProducts)
})

//Exercício 5

app.put("/products/edit:id", (req, res) => {
    try {
        const productId = req.params.id
        const newPrice = req.body.price

        const findProduct = arrayProducts.filter((product) => {
            return product.id === productId
        })
        if (!productId) {
            throw new Error("Produto não encontrado")
        }
        if (!findProduct) {
            throw new Error("Produto não encontrado")
        }
        if (!newPrice) {
            throw new Error("Preço não foi inserido")
        }
        if (newPrice < 0) {
            throw new Error("Preço está com valor incorreto")
        }
        const newArrayProducts = arrayProducts.map((product) => {
            return [product = {
                id: product.id,
                name: product.name,
                price: newPrice
            }, ...arrayProducts]
        })
        res.send(newArrayProducts)
    }
    catch (error: any) {
        switch (error.message) {
            case "Produto não encontrado":
                res.status(422)
                break
            case "Preço não foi inserido":
                res.status(422)
                break
            case "Preço está com valor incorreto":
                res.status(422)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})

//Exercício 6

app.delete("/products/delete:id", (req, res) => {
    try {
        const productId = req.params.id
        const findProduct = arrayProducts.filter((product) => {
            return product.id === productId
        })
        if (!findProduct) {
            throw new Error("Produto não encontrado")
        }
        const newArrayProducts = arrayProducts.filter((product) => {
            if (product.id !== productId) {
                return product
            }
        })
        res.send(newArrayProducts)
    }
    catch (error: any) {
        switch (error.message) {
            case "Produto não encontrado":
                res.status(400)
                break
            default:
                res.status(500)
        }
        res.send(error.message)
    }
})