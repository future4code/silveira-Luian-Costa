import express from "express";
import cors from "cors";
import knex from "knex"
import { AddressInfo } from "net";
import dotenv from "dotenv";

dotenv.config();

const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
})

const app = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`)
    }
})

app.post("/user", async (req, res) => {
    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Preencha os campos corretamente");
        }
        await connection("Users")
            .insert({
                id: Date.now().toString(),
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email
            })
        res.status(200).send("Usuário criado com sucesso!")
    } catch (error: any) {
        res.status(200).send(error.sqlMessage || error.message)
    }
});

app.get("/user/:id", async (req, res) => {
    try {
        const user = await connection("Users")
            .select("name", "nickname")
            .where({ id: req.params.id })
        if (user.length === 0) {
            throw new Error("Id incorreto")
        }
        res.status(200).send(user)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
});