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
}