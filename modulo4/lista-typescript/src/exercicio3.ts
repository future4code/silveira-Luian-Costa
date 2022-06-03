enum GENERO {
    ACAO = "Ação",
    DRAMA = "Drama",
    COMEDIA = "Comédia",
    ROMANCE = "Romance",
    TERROR = "Terror"
}

type Informacao = {
    nomeDoFilme: string,
    anoDeLancamento: number,
    generoDoFilme: GENERO,
    pontuacaoDoFilme?: number
}

function retornaInformacao(nome: string, ano: number, genero: GENERO, pontuacao?: number): Informacao {
    if (!pontuacao) {
        const filme = {
            nomeDoFilme: nome,
            anoDeLancamento: ano,
            generoDoFilme: genero,
        }
        return filme;
    } else if (nome && ano && genero && pontuacao) {
        const filme = {
            nomeDoFilme: nome,
            anoDeLancamento: ano,
            generoDoFilme: genero,
            pontuacaoDoFilme: pontuacao
        }
        return filme
    }
}
console.log(retornaInformacao("Garfield 2", 2006, GENERO.COMEDIA))
console.log(retornaInformacao("Duro de Matar", 1988, GENERO.ACAO, 8.2))