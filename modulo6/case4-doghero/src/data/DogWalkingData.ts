import { DogWalkingInputDTO, NewWalk } from '../types/DogWalkingInputDTO';
import { DataBase } from './DataBase';

export class DogWalkingDataBase extends DataBase {
    private TABLE_NAME = "doghero"

    public insertDogWalking = async (newWalk: NewWalk) => {
        try {
            await DataBase.connection(this.TABLE_NAME).insert(
                newWalk
            );
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };


    public getDogWalking = async (id: string) => {
        try {
            const result = await DataBase.connection(this.TABLE_NAME)
                .select("status", "pets", "duration", "price")
                .where({ id })
            return result
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message)
        }
    };

    public updateDogWalkingStatus = async (input: any) => {
        try {
            const { id, status } = input;
            switch (status.toLowerCase()) {
                case "do":
                    await DataBase.connection(this.TABLE_NAME)
                        .update("staus", "do")
                        .where({ id });
                    break;
                case "doing":
                    await DataBase.connection(this.TABLE_NAME)
                        .update("status", "doing")
                        .where({ id })
                    break;
                case "done":
                    await DataBase.connection(this.TABLE_NAME)
                        .update("status", "done")
                        .where({ id })
                    break;
            }
        } catch (error: any) {
            throw new Error(error.sqlMessage || error.message);
        }
    };
};

