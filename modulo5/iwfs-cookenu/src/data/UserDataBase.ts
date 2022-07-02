import { Database } from "./DataBase";

export class UserDataBase extends Database {
    public async createUser(id: string, name: string, email: string, password: string): Promise<void> {
        await this.getConnection()
        .insert({id, name, email, password})
        .into("Cookenu_Users")
    }
}