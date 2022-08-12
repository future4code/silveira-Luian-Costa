import { app } from "./controller/app";
import { paymentRouter } from "./routes/paymentRouter"

app.use("/payment", paymentRouter);