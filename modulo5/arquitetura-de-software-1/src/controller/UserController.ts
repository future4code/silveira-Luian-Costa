import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { userInput } from "../types/user";

export class UserController {
    public async signup(req: Request, res: Response) {
        try {
            const { name, email, password, role } = req.body

            const newUser: userInput = {
                name,
                email,
                password,
                role
            }

            const token = await new UserBusiness().signup(newUser)

            res.status(200).send({message: "Usuário criado com sucesso", token})
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }
    public async login(req: Request, res: Response) {
        try {

        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message)
        }
    }

}