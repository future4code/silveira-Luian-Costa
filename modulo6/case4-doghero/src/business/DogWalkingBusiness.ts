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

    public async insertDogWalking(newDogWalking: DogWalkingInputDTO) {
        try {
            const { date, duration, latitude, longitude, start_time, end_time, pets, token } = newDogWalking;

            if (!date || !latitude || !longitude || !start_time || !end_time || !pets || !token) {
                throw new CustomError(400, "Preencha corretamente as informações do passeio.");
            };

            const verify = this.authenticator.getData(token)
            if (!verify) {
                throw new Error("Para registrar um passeio o usuário precisa estar logado.")
            }

            const id = this.idGenerator.generateId();
            const status = "Do"

            const Price = (duration: string, pets: number): number => {
                switch (duration) {
                    case "30":
                        return 25 + (pets > 1 ? (pets - 1) * 15 : 0);
                    case "60":
                        return 35 + (pets > 1 ? (pets - 1) * 15 : 0);
                    default:
                        throw new CustomError(422, "Preencha o passeio com tempo de 30 minutos ou 60 minutos.")
                }
            };
            const newPrice = Price(duration, pets)

            const newWalk = {
                id,
                status,
                date,
                newPrice,
                duration,
                latitude,
                longitude,
                start_time,
                end_time,
                pets
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

            const result = await this.dogWalkingDatabase.getDogWalking(id);

            return result


        } catch (error: any) {
            throw new Error(error.message)
        };
    };

    public async updateDogWalkingStatus(id: string, status: string, token: string): Promise<void> {
        try {

            if (!id || !status) {
                throw new CustomError(422, "Please fill in all fields.");
            };

            if (!token) {
                throw new Error("Verify you authorization")
            };

            const alreadyExist = await this.dogWalkingDatabase.getDogWalking(id);

            if (!alreadyExist) {
                throw new CustomError(404, "Walking not found");
            };

            const updateStatusInput = {
                id, status, token
            };

            if (status.toLowerCase() !== "Do" && status.toLowerCase() !== "Doing" && status.toLowerCase() !== "Done") {
                throw new CustomError(422, "Please insert 'Do' or 'Doing' or 'Done'.");
            };

            await this.dogWalkingDatabase.updateDogWalkingStatus(updateStatusInput);

        } catch (error: any) {
            throw new Error(error.message)
        };
    }
}