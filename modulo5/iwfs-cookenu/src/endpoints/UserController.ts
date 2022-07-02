import { Request, Response } from "express";

export class UserController {
    public async createUser(req: Request, res: Response): Promise<void> {
        try {
            const { email, password, senha } = req.body

            if (!email || email.indexOf("@") === -1) {
                res.statusCode = 422
                throw new Error("Preencha o email corretamente")
            }

            if (!password || password.legth < 6) {
                throw new Error("Parâmetros faltando")
            }
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
        }
    }
}