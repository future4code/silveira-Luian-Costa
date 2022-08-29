import express from "express"
import { DogWalkingBusiness } from "../business/DogWalkingBusiness"
import { DogWalkingController } from "../controller/DogWalkingController"
import { DogWalkingDataBase } from "../data/DogWalkingData"
import { Authenticator } from "../services/Authenticator"
import { IdGenerator } from "../services/IdGenerator"

export const dogRouter = express.Router()

const dogWalkingBusiness = new DogWalkingBusiness(
    new DogWalkingDataBase,
    new IdGenerator,
    new Authenticator
)

const dogWalkingController = new DogWalkingController(dogWalkingBusiness)

dogRouter.post("/insert", dogWalkingController.insertDogWalking)
dogRouter.get("/:id", dogWalkingController.getDogWalking)
dogRouter.put("/edit", dogWalkingController.updateDogWalkingStatus)