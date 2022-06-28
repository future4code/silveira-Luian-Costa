import { User } from "../types";
import { Database } from "./DataBase";

export class userDataBase extends Database {
    public async createUser(id: string, email: string, password: string): Promise<void> {
        await this.getConnection()
            .insert({ id, email, password })
            .into("User")
    }
}