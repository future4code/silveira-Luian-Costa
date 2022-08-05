import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { IdGenerator } from "../services/IdGenerator";
import { CompetitionDTO } from "../types/CompetitionDTO";

export class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ) { }

    public createCompetition = async (req: Request, res: Response) => {
        try {
            const { competicao, status } = req.body

            const input: CompetitionDTO = {
                competicao,
                status
            }

            await this.competitionBusiness.createCompetition(input)

            res.status(201).send({ message: "Competição criada" })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    }

    public editCompetitionStatus = async (req: Request, res: Response) => {
        try {
            const { status } = req.body
            const id = req.params.id

            await this.competitionBusiness.editCompetitionStatus(status, id)

            res.status(200).send({ message: "Status alterado com sucesso!" })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    }
}