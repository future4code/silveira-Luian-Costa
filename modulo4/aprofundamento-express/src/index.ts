import express, { request } from "express";
import cors from "cors";
import { arrayDeAfazeres } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//Exercício 1

app.get("/ping", (req, res) => {
    res.status(200).send("pong")
});

//Exercício 4

app.get("/afazeres-completos", (req, res) => {
    const afazeresCompletos = arrayDeAfazeres.filter((afazer) => {
        return afazer.completed === true
    })
    res.status(200).send(afazeresCompletos)
})

//Exercício 5

app.post("/criar-afazer", (req, res) => {
    const novoAfazer = {
        userId: Number(req.headers.authorization),
        id: arrayDeAfazeres.length + 1,
        title: req.body.title,
        completed: req.body.completed
    }
    arrayDeAfazeres.push(novoAfazer)
    res.status(200).send(arrayDeAfazeres)
})