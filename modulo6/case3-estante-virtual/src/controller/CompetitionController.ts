import { Request, Response } from "express";
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionDTO } from "../types/CompetitionDTO";
import { ResultDTO } from "../types/ResultDTO";

export class CompetitionController {
  constructor(
    private competitionBusiness: CompetitionBusiness
  ) { }

  public createCompetition = async (req: Request, res: Response) => {
    try {
      const { competicao, status } = req.body;

      const input: CompetitionDTO = {
        competicao,
        status,
      };

      await this.competitionBusiness.createCompetition(input);

      res.status(201).send({ message: "Competição criada" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  };

  public editCompetitionStatus = async (req: Request, res: Response) => {
    try {
      const { status } = req.body;
      const id = req.params.id;

      await this.competitionBusiness.editCompetitionStatus(status, id);

      res.status(200).send({ message: "Status alterado com sucesso!" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  };

  public getAllCompetitions = async (req: Request, res: Response) => {
    try {
      const result = await this.competitionBusiness.getAllCompetitions();

      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  };

  public registerResult = async (req: Request, res: Response) => {
    try {
      const { competicao_id, atleta, value, unidade } = req.body

      const input: ResultDTO = {
        competicao_id,
        atleta,
        value,
        unidade
      }

      await this.competitionBusiness.registerResult(input)

      res.status(200).send({ message: "Resultado registrado com sucesso!" });
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  };

  public getResults = async (req: Request, res: Response) => {
    try {
      const result = await this.competitionBusiness.getResult()

      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }

  public getCompetitionResult = async (req: Request, res: Response) => {
    try {
      const id = req.params.id as any

      const result = await this.competitionBusiness.getCompetitionResult(id)

      res.status(200).send(result);
    } catch (error: any) {
      res.status(error.statusCode || 400).send({ message: error.message });
    }
  }
}
