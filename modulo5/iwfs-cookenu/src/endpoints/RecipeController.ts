import { Request, Response } from "express";
import { idGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { RecipeDataBase } from "../data/RecipeDataBase";

export class RecipeController {
    public async createRecipe(req: Request, res: Response): Promise<void> {
        try {
            const { title, description } = req.body

            const token = req.headers.authorization as string

            const AuthenticationData = new Authenticator().getData(token)

            if (!title || !description) {
                throw new Error("Preencha corretamente as informações da receita")
            }

            if (!AuthenticationData) {
                throw new Error("Autorização inválida")
            }

            const recipe = {
                id: new idGenerator().generateId(),
                title,
                description,
                created_at: new Date().toString(),
                creator_user_id: AuthenticationData.id
            }
            await new RecipeDataBase().createRecipe(recipe)

            res.status(200).send({ message: "Receita criada", token })
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
        }
    }

    public async getRecipeById(req: Request, res: Response): Promise<any> {
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

            const recipe = await new RecipeDataBase().getRecipeById(id)

            res.status(200).send({ id: recipe.id, title: recipe.title, description: recipe.description})
        } catch (error: any) {
            res.status(res.statusCode || 500).send(error.sqlMessage || error.message)
        }
    }
}

