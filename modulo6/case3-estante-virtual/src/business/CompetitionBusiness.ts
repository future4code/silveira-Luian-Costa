import { CompetitionData } from "../data/CompetitionData";
import { CustomError } from "../errors/CustomError";
import { IdGenerator } from "../services/IdGenerator";
import { CompetitionDTO, newCompetition } from "../types/CompetitionDTO";
import { ResultDTO } from "../types/ResultDTO";

export class CompetitionBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private competitionData: CompetitionData
    ) { }

    public createCompetition = async (input: CompetitionDTO) => {
        try {
            const { competicao, status } = input

            if (!competicao || !status) {
                throw new CustomError(422, "Preencha corretamente os campos da Competição");
            }

            if (status.toUpperCase() !== "EM ANDAMENTO" && status.toUpperCase() !== "FINALIZADA") {
                throw new CustomError(400, "Status da Competição inválido")
            }

            const id = this.idGenerator.generateId()

            const newCompetition: newCompetition = {
                id,
                competicao,
                status
            }

            await this.competitionData.createCompetition(newCompetition)
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public editCompetitionStatus = async (status: string, id: string) => {
        try {
            if (!status || !id) {
                throw new CustomError(422, "Preencha corretamente o parâmetro de pesquisa");
            }

            const alreadyExist = await this.competitionData.getCompetitionById(id)

            if (!alreadyExist) {
                throw new CustomError(400, "Competição inexistente!")
            }

            await this.competitionData.editCompetitionStatus(status, id)
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public getAllCompetitions = async () => {
        try {
            const result = await this.competitionData.getAllCompetitions()
            return result
        } catch (error: any) {
            throw new CustomError(400, error.message);
        }
    }

    public registerResult = async (input: ResultDTO) => {
        try {
            const { competicao_id, atleta, value, unidade } = input

            if (!competicao_id || !atleta || !value || !unidade) {
                throw new Error("Preencha corretamente os campos")
            }

            if (unidade.length !== 1) {
                throw new Error("Preencha corretamente os campos")
            }

            const alreadyExist = await this.competitionData.getCompetitionById(competicao_id)

            if (!alreadyExist) {
                throw new Error("A competição indicada não existe. Tente novamente!")
            }

            const newResult = {
                competicao_id,
                atleta,
                value,
                unidade
            }

            await this.competitionData.registerResult(newResult)

        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }

    public getResult = async () => {
        try {
            const result = await this.competitionData.getResults()

            return result
        } catch (error: any) {
            throw new CustomError(400, error.message)
        }
    }
}