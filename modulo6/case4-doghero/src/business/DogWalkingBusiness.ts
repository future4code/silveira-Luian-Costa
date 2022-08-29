import { DogWalkingDataBase } from "../data/DogWalkingData";
import { CustomError } from "../errors/CustomError";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { DogWalkingInputDTO } from "../types/DogWalkingInputDTO";

export class DogWalkingBusiness {
    constructor(
        private dogWalkingDatabase: DogWalkingDataBase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) { }

    public insertDogWalking = async (newDogWalking: DogWalkingInputDTO) => {
        try {
            const { date, duration, latitude, longitude, start_time, end_time, pets, token } = newDogWalking

            if (!date || !latitude || !longitude || !start_time || !end_time || !pets || !token) {
                throw new CustomError(400, "Preencha corretamente as informações do passeio.")
            };

            const verify = this.authenticator.getData(token)
            if (!verify) {
                throw new Error("Para registrar um passeio o usuário precisa estar logado.")
            }

            const id = this.idGenerator.generateId()
            const status = "Do"

            const Price = (duration: string, pets: number): number => {
                switch (duration) {
                    case "30":
                        return 25 + (pets > 1 ? (pets - 1) * 15 : 0)
                    case "60":
                        return 35 + (pets > 1 ? (pets - 1) * 15 : 0)
                    default:
                        throw new CustomError(422, "Preencha o passeio com tempo de 30 minutos ou 60 minutos.")
                }
            };
            const newPrice = Price(duration, pets)

            const newWalk = {
                id,
                status,
                date,
                price: newPrice,
                duration,
                latitude,
                longitude,
                pets,
                start_time,
                end_time
            }

            await this.dogWalkingDatabase.insertDogWalking(newWalk);

        } catch (error: any) {
            throw new Error(error.message)
        };
    };

    public getDogWalking = async (id: string, token: string) => {
        try {
            if (!id || !token) {
                throw new CustomError(400, "Parametros inválidos");
            }

            const verify = this.authenticator.getData(token)
            if (!verify) {
                throw new Error("Para registrar um passeio o usuário precisa estar logado.")
            }

            const result = await this.dogWalkingDatabase.getDogWalking(id);

            return result


        } catch (error: any) {
            throw new Error(error.message)
        };
    };

    public updateDogWalkingStatus = async (id: string, status: string, token: string) => {
        try {

            if (!id || !status) {
                throw new Error("Parâmetros faltando.");
            }

            if (!token) {
                throw new Error("O usuário precisa estar logado.")
            }

            const verify = this.authenticator.getData(token)
            if (!verify) {
                throw new Error("Para registrar um passeio o usuário precisa estar logado.")
            }

            const alreadyExist = await this.dogWalkingDatabase.getDogWalking(id);

            if (!alreadyExist) {
                throw new CustomError(404, "Passeio não encontrado");
            }

            if (status.toLowerCase() !== "do" && status.toLowerCase() !== "doing" && status.toLowerCase() !== "done") {
                throw new CustomError(422, "O status deve ser alterado entre do, doing ou done");
            }

            const input = {
                id, status
            };

            await this.dogWalkingDatabase.updateDogWalkingStatus(input);

        } catch (error: any) {
            throw new Error(error.message)
        };
    }
}