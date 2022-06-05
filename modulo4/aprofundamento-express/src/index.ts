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

//Exercício 6

app.put("/edita-afazer/:id", (req, res) => {
    const afazerId = Number(req.params.id)

    const editaAfazer = arrayDeAfazeres.filter((afazer) => {
        return afazer.id === afazerId
    }).map((afazer) => {
        return afazer = {
            userId: afazer.id,
            id: afazer.id,
            title: afazer.title,
            completed: !afazer.completed
        }
    })
    res.status(200).send(editaAfazer)
})

//Exercício 7

app.delete("/deleteafazer/:id", (req, res) => {
    const afazerId = Number(req.params.id)

    const deletarAfazer = arrayDeAfazeres.filter((afazer) => {
        return afazer.id !== afazerId
    })
    res.status(200).send(deletarAfazer)
})

//Exercício 8

app.get("/afazer/user/:id", (req, res) => {
    const userId = Number(req.params.id)

    const afazerUsuario = arrayDeAfazeres.filter((afazer) => {
        return userId === afazer.userId
    })
    res.status(200).send(afazerUsuario)
})

//Exercício 9 -> https://documenter.getpostman.com/view/20353668/Uz5DrdRF