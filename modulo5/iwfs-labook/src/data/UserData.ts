import { User } from "../models/UserModel";
import { FindByEmailResponse } from "../types/FindByEmailResponse";
import { DataBase } from "./DataBase";

export class UserData extends DataBase {
    private TABLE_NAME = "labook_users"

    async findUserByEmail(email: string): Promise<FindByEmailResponse> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(this.TABLE_NAME)
                .where({ email: email })
            return result[0]
        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco de dados")
        }

    }

    async insertUser(user: User): Promise<void> {
        try {
            await this.getConnection()
                .insert(user)
                .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error("Erro ao inserir usuário no banco de dados")
        }
    }

    async getUserById(id: string): Promise<string> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from(this.TABLE_NAME)
                .where({ id })
            return result[0]
        } catch (error: any) {
            throw new Error("Usuário não encontrado")
        }
    }
}