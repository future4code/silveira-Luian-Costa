import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//Exercício 1

app.get("/test", (req, res) => {
    res.status(200).send("API FUNCIONAL!!!!!!")
})