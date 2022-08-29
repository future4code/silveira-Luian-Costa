import { FindByEmailResponse } from "../types/FindByEmailResponse";
import { User } from "../types/UserInterface";
import { DataBase } from "./DataBase";

export class UserData extends DataBase {
    private TABLE_NAME = "doghero_users"

    public findUserByEmail = async (email: string): Promise<FindByEmailResponse> => {
        try {
            const result = await DataBase.connection(this.TABLE_NAME)
                .select("*")
                .from(this.TABLE_NAME)
                .where({ email: email })
            return result[0]
        } catch (error: any) {
            throw new Error("Erro ao buscar usuário no banco de dados")
        }

    }

    public insertUser = async (user: User): Promise<any> => {
        try {
            await DataBase.connection(this.TABLE_NAME)
                .insert(user)
                .into(this.TABLE_NAME)
        } catch (error: any) {
            throw new Error(error.message)
        }
    }

    public getUserById = async (id: string): Promise<string> => {
        try {
            const result = await DataBase.connection(this.TABLE_NAME)
                .select("*")
                .from(this.TABLE_NAME)
                .where({ id })
            return result[0]
        } catch (error: any) {
            throw new Error("Usuário não encontrado")
        }
    }
}