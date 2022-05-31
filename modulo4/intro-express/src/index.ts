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

//Exercício 4

app.get("/users", (req, res) => {
    res.status(200).send(arrayUsers)
})

//Exercício 5

type UserPost = {
    id: number,
    title: string,
    body: string,
    userId: number
}

//Exercício 6

const arrayPosts: UserPost[] = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }
]

//Exercício 7

app.get("/posts", (req, res) => {
    res.status(200).send(arrayPosts)
})