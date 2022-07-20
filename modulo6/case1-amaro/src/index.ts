import { app } from "./controller/app";
import { productRouter } from "./routes/productRouter";

app.use("/product", productRouter)