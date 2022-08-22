import { app } from "./controller/app";
import { competitionRouter } from "./routes/competitionRouter";

app.use("/competition", competitionRouter)