import { app } from "./controller/app";
import { competitionRouter } from "./routes/CompetitionRouter";

app.use("/competition", competitionRouter)