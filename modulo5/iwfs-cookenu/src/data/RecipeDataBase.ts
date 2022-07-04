import { Database } from "./DataBase";

export class RecipeDataBase extends Database {
    public async createRecipe(recipe: object,): Promise<void> {
        await this.getConnection()
            .insert(recipe)
            .into("Recipes")
    }

    public async getRecipeById(id: string): Promise<any> {
        const [result] = await this.getConnection()
            .select("*")
            .from("Recipes")
            .where({ id })
        return result
    }
}