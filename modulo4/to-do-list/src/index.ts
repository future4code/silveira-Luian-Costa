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

//Criar Usuário
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
        res.status(500).send(error.sqlMessage || error.message)
    }
});

//Pegar Usuário Pelo ID
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

//Editar Usuário
app.put("/user/edit/:id", async (req, res) => {
    try {
        if (!req.body.name || !req.body.nickname || !req.body.email) {
            throw new Error("Preencha os campos corretamente")
        }
        await connection("Users")
            .update({
                name: req.body.name,
                nickname: req.body.nickname,
                email: req.body.email,
            })
            .where({ id: req.params.id })
        res.status(200).send("Usuário editado com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

//Criar Tarefa
app.post("/task", async (req, res) => {
    try {
        if (!req.body.title || !req.body.description || !req.body.limit_date || !req.body.status || !req.body.creator_user_id) {
            throw new Error("Preencha corretamente os campos")
        }
        const resultado = await connection("Tarefas")
            .insert({
                task_id: Date.now().toString(),
                title: req.body.title,
                description: req.body.description,
                limit_date: req.body.limit_date.split("/").reverse().join("-"),
                status: req.body.status,
                creator_user_id: req.body.creator_user_id
            })
        res.status(200).send("Tarefa adicionada com sucesso!")
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})