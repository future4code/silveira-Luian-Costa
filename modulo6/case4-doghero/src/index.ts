import { app } from "./controller/app";
import { userRouter } from "./routes/userRouter";

app.use("/users", userRouter)
app.use("/dogwalking", userRouter)