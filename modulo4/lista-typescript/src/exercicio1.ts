function separaString(nome: string, dataNascimento: string): string {
    const dataSplit = dataNascimento.split("/")
    return `Olá, me chamo ${nome}, nasci no dia ${dataSplit[0]} do mês ${dataSplit[1]} do ano de ${dataSplit[2]}`
}
console.log(separaString("Marcos", "30/05/1995"))