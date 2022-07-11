import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { LoginInputDTO } from "../types/LoginInputDTO";
import { SignupInputDTO } from "../types/signupInputDTO";

export class UserController {
    public async signup(req: Request, res: Response) {
        const { name, email, password } = req.body

        const input: SignupInputDTO = {
            name,
            email,
            password
        }
        try {
            const token = await new UserBusiness().signup(input)
            res.status(201).send({ message: "Usuário criado com sucesso", token })
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

    public async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            const input: LoginInputDTO = {
                email,
                password
            }
            try {
                const token = await new UserBusiness().login(input)
                res.status(200).send({ message: "Login realizado com sucesso!", token })
            } catch (error: any) {
                res.status(500).send(error.sqlMessage || error.message);
            }
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
}