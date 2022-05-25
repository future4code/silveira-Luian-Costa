//Exercício 2

const operacao = process.argv[2]
const numero1 = Number(process.argv[3])
const numero2 = Number(process.argv[4])

switch(operacao){
    case "add":
        console.log(numero1 + numero2)
        break;
    case "sub":
        console.log(numero1 - numero2)
        break;
    case "div":
        console.log(numero1 / numero2)
        break;
    case "mul":
        console.log(numero1 * numero2)
        break;
}
