import { app } from "./controller/app";
import { userRouter } from "./routes/userRouter";
import { dogRouter } from "./routes/dogWalkingRouter"

app.use("/users", userRouter)
app.use("/dogwalking", dogRouter)