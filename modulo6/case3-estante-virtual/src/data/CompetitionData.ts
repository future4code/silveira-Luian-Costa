import { CustomError } from "../errors/CustomError"
import { newCompetition } from "../types/CompetitionDTO"
import { DataBase } from "./DataBase"

export class CompetitionData extends DataBase {
    protected TABLE_NAME = "competicao"

    public createCompetition = async (newCompetition: newCompetition) => {
        try {
            await DataBase.connection(this.TABLE_NAME)
                .insert(newCompetition);
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }

    public editCompetitionStatus = async (status: string, id: string) => {
        try {
            await DataBase.connection
                .update({ status })
                .from(this.TABLE_NAME)
                .where({ id })
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }

    public getCompetitionById = async (id: string) => {
        try {
            const result = await DataBase.connection(this.TABLE_NAME)
                .select("*")
                .where({ id: id })
            return result[0]
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }
}