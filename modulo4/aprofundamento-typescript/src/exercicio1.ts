//1 - A) Ocorre um erro pois a tipagem é uma string, e o valor atribuído foi um número
//1 - B) Na tipagem da variável colocamos uma "|" e o tipo escolhido logo após

//1 - C)

enum corFavorita {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

const pessoa1: pessoa = {
    nome: "Carlos",
    idade: 33,
    corFavorita: "Preto"
}

const pessoa2: pessoa = {
    nome: "Eric",
    idade: 20,
    corFavorita: corFavorita.AZUL
}

const pessoa3: pessoa = {
    nome: "Junior",
    idade: 25,
    corFavorita: "Vermelho"
}

console.log(pessoa1, pessoa2, pessoa3)