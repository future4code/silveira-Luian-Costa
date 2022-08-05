import express from "express"
import { CompetitionBusiness } from "../business/CompetitionBusiness";
import { CompetitionController } from "../controller/CompetitionController";
import { CompetitionData } from "../data/CompetitionData";
import { IdGenerator } from "../services/IdGenerator";

export const competitionRouter = express.Router();

const competitionBusiness = new CompetitionBusiness(
    new IdGenerator,
    new CompetitionData
)

const competitionController = new CompetitionController(competitionBusiness)

competitionRouter.post("/create", competitionController.createCompetition)