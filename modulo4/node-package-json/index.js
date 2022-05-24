// Exercício 1
//a) Usamos process.argv[]

//b)

// const name = process.argv[2]
// const age = Number(process.argv[3])
// const age2 = age + 7

// console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age2}`)

//c)

//Exercício 2

// const operacao = process.argv[2]
// const numero1 = Number(process.argv[3])
// const numero2 = Number(process.argv[4])

// switch(operacao){
//     case "add":
//         console.log(numero1 + numero2)
//         break;
//     case "sub":
//         console.log(numero1 - numero2)
//         break;
//     case "div":
//         console.log(numero1 / numero2)
//         break;
//     case "mul":
//         console.log(numero1 * numero2)
//         break;
// }

//Exercício 3

const tarefa = process.argv[2]
const listaDeTarefa = ["Acordar"]

listaDeTarefa.push(tarefa)
console.log(listaDeTarefa)