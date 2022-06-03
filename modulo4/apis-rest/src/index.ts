import express from "express";
import cors from "cors";
import { users, User } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//Exercício 1
//A) Método GET
//B) Entidade "/users"

app.get("/users/:type", (req, res) => {
    let errorCode = 404
    try {
        const type = req.params.type
        const user = users.filter((user) => {
            return user.type === type
        })
        if (type !== "ADMIN" && type !== "NORMAL") {
            errorCode = 404
            throw new Error("Insira o type corretamente")
        }
        res.status(200).send(user)
    }
    catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//Exercício 2
//A) Passei por path params
//B) Usei uma condicional que valida o parametro passado

//Exercício 3

app.get("/user/:name", (req, res) => {
    let errorCode = 404
    try {
        const name = req.params.name
        const user = users.find((user) => {
            return user.name.toLowerCase() === name.toLowerCase()
        })
        if (!user) {
            errorCode = 404
            throw new Error("Usuário não encontrado")
        }
        res.status(200).send(user)
    }
    catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

//Exercício 4

app.post("/users/create", (req, res) => {
    let errorCode = 404
    try {
        const { id, name, email, type, age } = req.body
        const newUser: User = {
            id,
            name,
            email,
            type,
            age
        }
        if (!id || !name || !email || !type || !age) {
            errorCode = 422
            throw new Error("Preencha corretamente os campos")
        }
        users.push(newUser)
        res.status(200).send(users)
    }
    catch (error: any){
        res.status(errorCode).send(error.message)
    }
})

//A) Nada mudou
//B) É uma questão de boas práticas