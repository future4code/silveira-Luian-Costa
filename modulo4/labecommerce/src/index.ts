import express from 'express'
import { AddressInfo } from "net";
import cors from 'cors'
import { connection } from './data/connection';

const app = express();

app.use(express.json());
app.use(cors());

//CRIAÇÃO DE USUÁRIO
app.post("/users", async (req, res) => {
    try {
        if (!req.body.name || !req.body.email || !req.body.password) {
            throw new Error("Preencha os dados corretamente")
        }
        await connection("labecommerce_users")
            .insert({
                id: Date.now().toString(),
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            })
        res.status(200).send(await connection("labecommerce_users"))
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//EXIBE TODOS OS USUÁRIOS
app.get("/users", async (req, res) => {
    try {
        const result = await connection("labecommerce_users")
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//CRIAÇÃO DE PRODUTO
app.post("/products", async (req, res) => {
    try {
        if (!req.body.name || !req.body.price || !req.body.image) {
            throw new Error("Preencha os campos corretamente.")
        }
        await connection("labecommerce_products")
            .insert({
                id: Date.now().toString(),
                name: req.body.name,
                price: req.body.price,
                image_url: req.body.image
            })
        res.status(200).send(await connection("labecommerce_products"))
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//EXIBE TODOS OS PRODUTOS
app.get("/products", async (req, res) => {
    try {
        const result = await connection("labecommerce_products")
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//REGISTRO DE COMPRA
app.post("/purchases", async (req, res) => {
    try {
        const { user_id, product_id, quantity } = req.body
        const preco: any = await connection("labecommerce_products")
            .where("id", product_id)
            .select("price")
            .first()
        const total_price = preco.price * quantity;

        await connection("labecommerce_purchases")
            .insert({
                id: Date.now().toString(),
                user_id,
                product_id,
                quantity,
                total_price,
            })
        res.status(200).send(await connection("labecommerce_purchases"))
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//BUSCA POR COMPRA
app.get("/users/:user_id/purchases", async (req, res) => {
    try {
        const result = await connection("labecommerce_purchases")
            .where({ user_id: req.params.user_id })
            res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});