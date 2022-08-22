import express from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserData } from "../data/UserData"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const userRouter = express.Router()

const userBusiness = new UserBusiness(
    new IdGenerator,
    new HashManager,
    new UserData,
    new Authenticator
)

const userController = new UserController(userBusiness)

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)