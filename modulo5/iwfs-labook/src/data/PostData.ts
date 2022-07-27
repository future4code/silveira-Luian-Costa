import { Post } from "../models/PostModel";
import { DataBase } from "./DataBase";

export class PostData extends DataBase {
    private TABLE_NAME = "labook_posts"

    async createPost(newPost: Post): Promise<void> {
        try {
            await this.getConnection()
                .insert(newPost)
                .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error("Erro ao criar post")
        }
    }

    async getPostById(id: string): Promise<Post> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(this.TABLE_NAME)
                .where({ id: id })
            return result[0]
        } catch (error: any) {
            throw new Error("Post não encontrado")
        }
    }
}