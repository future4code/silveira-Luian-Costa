//Exercício 2

type Afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

//Exercício 3

export const arrayDeAfazeres: Afazer[] = [
   {userId: 1, id: 1, title: "Lavar pratos", completed: true},
   {userId: 1, id: 2, title: "Ler 15 minutos", completed: false},
   {userId: 2, id: 3, title: "Caminhar", completed: false},
   {userId: 2, id: 4, title: "Lavar roupas", completed: true},
   {userId: 3, id: 5, title: "Limpar casa", completed: true},
   {userId: 4, id: 6, title: "Organizar o quarto", completed: false},
   {userId: 5, id: 7, title: "Sair com os amigos", completed: true},
]