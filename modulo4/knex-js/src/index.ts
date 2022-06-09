import express from "express";
import cors from "cors";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
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

//Exercício 1
//A) O Raw nos retorna as informações do banco de dados

//B)

app.get("/actor", async (req, res) => {
    try {
        const resultado = await connection.raw(`
            SELECT * FROM Actor Where name = "${req.body.name}"
        `)
        res.status(200).send({ message: resultado[0] })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/actor/gender", async (req, res) => {
    try {
        const resultado = await connection.raw(`
           SELECT COUNT (gender) FROM Actor WHERE gender = "${req.body.gender}"
        `)
        res.status(200).send({ message: resultado[0] })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//Exercício 2
app.put("/actor/salary/:id", async (req, res) => {
    try {
        await connection("Actor")
            .update({
                salary: req.body.salary
            }).where({ id: req.params.id })
        res.status(200).send("Salário Atualizado")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.delete("/actor/delete/:id", async (req, res) => {
    try {
        await connection("Actor")
            .where({ id: req.params.id })
            .delete();
        res.status(200).send("Ator deletado")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/actor/salary/gender", async (req, res) => {
    try {
        const resultado = await connection("Actor")
            .select()
            .avg("salary")
            .where({ gender: req.body.gender })
        res.status(200).send({ message: resultado[0] })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//Exercício 3

app.get("/actor/:id", async (req, res) => {
    try {
        const resultado = await connection("Actor")
            .select("*")
            .where({ id: req.params.id })
        res.status(200).send({ message: resultado[0] })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/actor", async (req, res) => {
    try {
        const count = await connection("Actor")
            .select()
            .count("*")
            .where({ gender: req.query.gender as string })
        res.status(200).send({ quantity: count })
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.post("/actor/create", async (req, res) => {
    try {
        const resultado = await connection("Actor")

    } catch (error: any) {

    }
})

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo
        console.log(`Server is running in http://localhost:${address.port}`)
    } else {
        console.error(`Failure upon starting server.`)
    }
})