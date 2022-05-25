// Exercício 1
//a) Usamos process.argv[]

//b)

const name = process.argv[2]
const age = Number(process.argv[3])
const age2 = age + 7

console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age2}`)


