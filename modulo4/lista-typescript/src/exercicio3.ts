enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comédia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type informacao = {
    nome: string,
    anoDeLancamento: number,
    genero: GENERO,
    pontuacao?: number
}