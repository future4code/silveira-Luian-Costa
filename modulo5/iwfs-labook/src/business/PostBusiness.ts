import { PostData } from "../data/PostData";
import { Post } from "../models/PostModel";
import { dataAtual } from "../services/Date";
import { idGenerator } from "../services/IdGenerator";
import { PostCreationDTO } from "../types/PostCreationDTO";

export class PostBusiness {
    async createPost(input: PostCreationDTO): Promise<void> {
        try {
            //Desestruturação do input
            const { photo, description, type, author_id } = input

            //Validação de campos
            if (!photo || !description || !type) {
                throw new Error("Preencha os campos corretamente")
            }

            //Gerar id de publicação
            const id = new idGenerator().generateId()

            //Função que salva a data da publicação
            const created_at = dataAtual()

            //Estrutura o post com as informação tratadas
            const newPost = new Post(
                id,
                photo,
                description,
                type,
                created_at,
                author_id
            )

            await new PostData().createPost(newPost)
        } catch (error: any) {
            throw new Error("Erro ao criar post!!!")
        }
    }
}