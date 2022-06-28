import { User } from "../types";
import { Database } from "./DataBase";

export class userDataBase extends Database {
    public async createUser(id: string, email: string, password: string): Promise<void> {
        await this.getConnection()
            .insert({ id, email, password })
            .into("User")
    }

    public async getUserByEmail(email: string): Promise<any> {
        const [result] = await this.getConnection()
            .select("*")
            .from("User")
            .where({ email: email })
        return result
    }

    public async getUserById(id: string): Promise<any> {
        const [result] = await this.getConnection()
            .select("*")
            .from("User")
            .where({ id })
        return result
    }
}