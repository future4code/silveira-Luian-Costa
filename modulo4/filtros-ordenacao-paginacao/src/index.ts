import express, { Request, Response } from 'express'
import cors from 'cors'
import { connection } from './data/connection'

export const app = express();

app.use(express.json());
app.use(cors());

export default async function selectAllUsers(name: string): Promise<any> {
    const result = await connection.raw(`
    SELECT * FROM aula49_exercicio
    where name LIKE "%${name}%";
    `)
    return result[0]
}

app.get("/users", async (req: Request, res: Response) => {
    try {
        const name = req.query.name
        const users = await selectAllUsers(name as string)
        res.status(200).send(users)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

async function ordenacaoType(type: string): Promise<any> {
    const result = await connection.raw(`
       SELECT * FROM aula49_exercicio
       WHERE type LIKE "%${type}%";
    `)
    return result[0]
}

app.get("/users/:type", async (req: Request, res: Response) => {
    try {
        const tipo = req.params.type
        const users = await ordenacaoType(tipo as string)
        res.status(200).send(users)
    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

app.get("/userspage", async (req, res) => {
    try {
        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1
        }
        let size = 5
        let offset = size * (page - 1)
        const result = await connection("aula49_exercicio")
            .limit(size)
            .offset(offset)
        res.status(200).send(result)
    } catch (error: any) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});