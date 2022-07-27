import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostData } from "../data/PostData";
import { UserData } from "../data/UserData";
import { Authenticator } from "../services/Authenticator";
import { PostCreationDTO } from "../types/PostCreationDTO";

export class PostController {
    async createPost(req: Request, res: Response): Promise<void> {
        try {
            const { photo, description, type } = req.body
            const token = new Authenticator().getData(req.headers.authorization as string);
            const data = await new UserData().getUserById(token.id)

            if (!data) {
                throw new Error("O usuário precisa estar logado para publicar.")
            }

            const input: PostCreationDTO = {
                photo,
                description,
                type,
                author_id: token.id
            }

            await new PostBusiness().createPost(input)
            res.status(200).send({ message: "Publicação feita." })
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }

    async getPostById(req: Request, res: Response): Promise<void> {
        try {
            const postId = req.params.id

            if (!postId) {
                throw new Error("Insira o id da publicação")
            }

            const post = await new PostData().getPostById(postId)

            res.status(200).send({ post })
        } catch (error: any) {
            res.status(500).send(error.sqlMessage || error.message);
        }
    }
}