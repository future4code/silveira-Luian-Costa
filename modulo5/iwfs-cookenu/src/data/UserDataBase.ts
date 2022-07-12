import { Database } from "./DataBase";

export class UserDataBase extends Database {
    public async signUp(id: string, name: string, email: string, password: string): Promise<void> {
        await this.getConnection()
            .insert({ id, name, email, password })
            .into("Cookenu_Users")
    }

    public async login(email: string): Promise<any> {
        const [result] = await this.getConnection()
            .select("*")
            .from("Cookenu_Users")
            .where({ email: email })
        return result
    }

    public async getUser(id: string): Promise<any> {
        const [result] = await this.getConnection()
            .select("*")
            .from("Cookenu_Users")
            .where({ id: id })
        return result
    }

    public async getUserById(id: string): Promise<any> {
        const [result] = await this.getConnection()
            .select("*")
            .from("Cookenu_Users")
            .where({ id: id })
        return result
    }
}