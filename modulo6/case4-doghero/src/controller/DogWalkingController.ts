import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";
import { DogWalkingInputDTO } from "../types/DogWalkingInputDTO";


export class DogWalkingController {
    constructor(
        private dogWalkingBusiness: DogWalkingBusiness
    ) { }

    public insertDogWalking = async (req: Request, res: Response) => {
        try {
            const { date, duration, latitude, longitude, start_time, end_time, pets } = req.body;

            const token = req.headers.authorization as string;

            const newDogWalking: DogWalkingInputDTO = {
                date,
                duration,
                latitude,
                longitude,
                pets,
                start_time,
                end_time,
                token
            };
            console.log(newDogWalking)
            await this.dogWalkingBusiness.insertDogWalking(newDogWalking)

            res.status(201).send({ Message: "Passei registrado!" })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    };

    public getDogWalking = async (req: Request, res: Response) => {
        try {
            const id = req.params.id

            const token = req.headers.authorization as string;

            const result = await this.dogWalkingBusiness.getDogWalking(id, token)

            res.status(200).send(result)
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    };

    public updateDogWalkingStatus = async (req: Request, res: Response) => {
        try {
            const { id, status } = req.body;
            const token = req.headers.authorization as string

            await this.dogWalkingBusiness.updateDogWalkingStatus(id, status, token);

            res.status(200).send({ Message: "Walking Status updated." })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    }
}