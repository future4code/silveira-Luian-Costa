import app from "./app"
import { UserController } from "./endpoints/UserController"

const userController = new UserController();

app.post('/user/signup', userController.createUser)
// app.put('/user/edit/:id', editUser)