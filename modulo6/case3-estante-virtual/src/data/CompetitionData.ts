import { CustomError } from "../errors/CustomError"
import { newCompetition } from "../types/CompetitionDTO"
import { ResultDTO } from "../types/ResultDTO"
import { DataBase } from "./DataBase"

export class CompetitionData extends DataBase {
    protected TABLE_NAME = "competicao"
    protected TABLE_NAME2 = "resultados"

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

    public getAllCompetitions = async () => {
        try {
            const result = await DataBase.connection(this.TABLE_NAME)
                .select("*")
            return result
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }

    public registerResult = async (newResult: ResultDTO) => {
        try {
            await DataBase.connection(this.TABLE_NAME2)
                .insert(newResult)
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }

    public getResults = async () => {
        try {
            const result = await DataBase.connection(this.TABLE_NAME2)
                .select("*")
            return result
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }

    public getCompetitionResult = async (id: string) => {
        try {
            const result = await DataBase.connection(this.TABLE_NAME2)
                .select("*")
                .where({ competicao_id: id })
            return result
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }
}