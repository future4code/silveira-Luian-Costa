import { user } from "../types/user";
import { Database } from "./DataBase";

export class UserData extends Database {
    public async insertUser(user: user) {
        await this.getConnection()
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                role: user.role
            }).into("User_Arq")
    }

    public async getUserByEmail(email: string): Promise<any> {
        try {
            const result = await this.getConnection()
                .select("*")
                .from("User_Arq")
                .where({ email: email })
            if (!result[0]) {
                throw new Error("Usuário não encontrado")
            }
            return result[0]
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getAllUsers() {
        try {
            const result = await this.getConnection()
                .select("id", "name", "email", "role")
                .from("User_Arq")
            return result
        } catch (error: any) {
            throw new Error("Erro no banco de dados")
        }
    }
}