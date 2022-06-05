import express, { Response, Request } from "express";
import cors from "cors";
import { userAccount, usersAccounts } from "./data";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

app.post("/user/create", (req: Request, res: Response) => {
    let errorCode = 404
    try {
        const { name, cpf, dateOfBirth } = req.body
        const date = dateOfBirth.split("/")
        const age = 2022 - date[2]
        let checkCpf = false

        if (age < 18) {
            errorCode = 422
            throw new Error("A idade deve ser maior ou igual a 18 anos.")
        }
        if (!name || !cpf || !dateOfBirth) {
            errorCode = 422
            throw new Error("Preencha corretamente as informações")
        }
        for (let i = 0; i < usersAccounts.length; i++) {
            if (usersAccounts[i].cpf === cpf) {
                checkCpf = true
            }
        }
        if (checkCpf == true) {
            errorCode = 409
            throw new Error("Erro ao cadastrar! Este CPF já está registrado.")
        }

        const newUser: userAccount = {
            name,
            cpf,
            dateOfBirth,
            balance: 0,
            bankStatement: []
        }
        usersAccounts.push(newUser)
        res.status(200).send(newUser)
    }
    catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/users", (req: Request, res: Response) => {
    res.status(200).send(usersAccounts)
})