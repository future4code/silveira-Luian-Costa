import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO } from "../types/LoginInputDTO";
import { SignupInputDTO } from "../types/SignupInputDTO";


export class UserController {
    constructor(
        private userBusiness: UserBusiness
    ) { }

    public signup = async (req: Request, res: Response) => {
        const { name, email, password } = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }
        try {
            const token = await this.userBusiness.signup(input)
            res.status(201).send({ message: "Usuário criado com sucesso", token })
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const { email, password } = req.body

            const input: LoginInputDTO = {
                email,
                password
            }
            try {
                const token = await this.userBusiness.login(input)
                res.status(200).send({ message: "Login realizado com sucesso!", token })
            } catch (error: any) {
                res.status(500).send(error.sqlMessage || error.message);
            }
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
}