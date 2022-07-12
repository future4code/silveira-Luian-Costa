import { Request, Response } from "express";
import { idGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";

export class UserController {
    public async signUp(req: Request, res: Response): Promise<void> {
        try {
            const { email, password, name } = req.body

            if (!email || !password || !name) {
                res.statusCode = 422
                throw new Error("Preencha as credencias corretamente")
            }

            if (email.indexOf("@") === -1) {
                res.statusCode = 422
                throw new Error("Preencha o email corretamente")
            }

            if (password.legth < 6) {
                throw new Error("Parâmetros faltando")
            }
            const id = new idGenerator().generateId()
            const hashPassword = new HashManager().generateHash(password)

            await new UserDataBase().signUp(id, name, email, hashPassword)

            const token = new Authenticator().generateToke({ id })

            res.status(200).send({ message: "Usuário criado com sucesso", token })
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
        }
    }

    public async login(req: Request, res: Response): Promise<void> {
        try {
            const { email, password } = req.body

            if (!email || email.indexOf("@") === -1) {
                res.statusCode = 422
                throw new Error("Preencha o email corretamente")
            }

            const user = await new UserDataBase().login(email)

            if (!user) {
                res.statusCode = 401
                throw new Error("Credenciais inválidas")
            }

            const verificaSenha = new HashManager().compareHash(password, user.password)

            if (!verificaSenha) {
                res.statusCode = 401
                throw new Error("Credenciais inválidas")
            }

            const token = new Authenticator().generateToke({ id: user.id })

            res.status(200).send({ message: "Login feito com sucesso", token })
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
        }
    }

    public async getUser(req: Request, res: Response): Promise<any> {
        try {
            const token = req.headers.authorization as string

            const AuthenticationData = new Authenticator().getData(token)

            if (!AuthenticationData.id) {
                res.statusCode = 401
                throw new Error("Token inválido")
            }

            const user = await new UserDataBase().getUser(AuthenticationData.id)

            res.status(200).send({ id: user.id, email: user.email, name: user.name })
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
        }
    }

    public async getUserById(req: Request, res: Response): Promise<void> {
        try {
            const id = req.params.id
            if (!id) {
                throw new Error("Informe o id")
            }

            const token = req.headers.authorization as string

            const AuthenticationData = new Authenticator().getData(token)

            if (!AuthenticationData) {
                throw new Error("Não possui autorização")
            }

            const user = await new UserDataBase().getUserById(id)

            res.status(200).send({ id: user.id, name: user.name, email: user.email})
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
        }

    }
}