import { Request, Response } from "express";
import { userDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { idGenerator } from "../services/IdGenerator";
import { User } from "../types";

export class UserController {
   public async createUser(req: Request, res: Response): Promise<void> {
      try {
         const { email, password } = req.body

         if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email incorreto!")
         }

         if (!password || password.legth < 6) {
            throw new Error("Parâmetros faltando")
         }

         const id = new idGenerator().generateId()

         await new userDataBase().createUser(id, email, password)

         const token = new Authenticator().generateToken({ id })

         res.status(200).send({ message: "Usuárico criado com sucesso", token })
      } catch (error: any) {
         res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
      }
   }

   public async login(req: Request, res: Response): Promise<void> {
      try {
         const { email, password } = req.body

         if (!email || email.indexOf("@") === -1) {
            res.statusCode = 422
            throw new Error("Email inválido")
         }

         const user = await new userDataBase().getUserByEmail(email);

         if (password !== user.password) {
            res.statusCode = 401
            throw new Error("Senha incorreta")
         }
         console.log(email, password)

         const token = new Authenticator().generateToken({ id: user.id })

         res.status(200).send({ message: "token gerado pelo jwt", token })
      } catch (error: any) {
         res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
      }
   }

   public async getUser(req: Request, res: Response): Promise<any> {
      try {
         const token = req.headers.authorization as string;
         const AuthenticationData = new Authenticator().getData(token)
         const user = await new userDataBase().getUserById(AuthenticationData.id)
         res.status(200).send({ id: user.id, email: user.email })
      }
      catch (error: any) {
         res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
      }
   }
}