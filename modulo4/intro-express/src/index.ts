import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

//Exercício 1

app.get("/", (req, res) => {
    res.send("hello from Express")
})

//Exercício 2

type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string
}

//Exercício 3

const arrayUsers: User[] = [
    { id: 1, name: "Eric", phone: 123456789, email: "eric@email.com", website: "www.eric.com" },
    { id: 2, name: "Lucas", phone: 134567122, email: "lucas@email.com", website: "www.lucas.com" },
    { id: 3, name: "Rafael", phone: 987654321, email: "Rafael@email.com", website: "www.Rafael.com" },
    { id: 4, name: "Carlos", phone: 122222789, email: "Carlos@email.com", website: "www.Carlos.com" },
    { id: 5, name: "Kaiki", phone: 441233455, email: "Kaiki@email.com", website: "www.Kaiki.com" }
]

app.get("/users", (req, res) => {
    res.status(200).send(arrayUsers)
})