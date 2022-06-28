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
         res.status(500).send(error.sqlMessage || error.message)
      }
   }
}