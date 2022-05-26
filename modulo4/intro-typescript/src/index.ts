//Exercício 1

// function checaTriangulo(a: number, b: number, c:number ) :string {
//     if(a !== b && b !== c){
//         return "Escaleno"
//     }else if(a === b && b === c){
//         return "Equilátero"
//     }else{
//         return "Isósceles"
//     }
// }
// console.log(checaTriangulo(4, 5, 2))

// //Exercício 2

// function imprimeTresCoresFavoritas(): Array<string> {
//     const cor1: string = process.argv[2]
//     const cor2: string = process.argv[3]
//     const cor3: string = process.argv[4]
//     return [cor1, cor2, cor3]
// }
// console.log(imprimeTresCoresFavoritas())

// //Exercício 3

// function checaAnoBissexto(ano: number): boolean {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
// }
// console.log(checaAnoBissexto(2022))

// //Exercício 4

// function comparaDoisNumeros(num1: number, num2: number): number {
//     let maiorNumero;
//     let menorNumero;

//     if(num1 > num2){
//         maiorNumero = num1;
//         menorNumero = num2
//     }else{
//         maiorNumero = num2;
//         menorNumero= num1
//     }
//     return maiorNumero - menorNumero
// }
// console.log(comparaDoisNumeros(6, 10))

//Exercício 5

function checaRenovacao(anoAtual: number, anoNascimento: number, anoEmissao: number): any {
    const idade: number = anoAtual - anoNascimento
    const tempoCarteira: number = anoAtual - anoEmissao

    const cond1: boolean = idade < 20 && tempoCarteira >= 5
    const cond2: boolean = idade > 20 && idade <= 50 && tempoCarteira >= 50
    const cond3: boolean = idade > 50 && tempoCarteira >= 15

    return (cond1 || cond2 || cond3)
}
console.log(checaRenovacao(2022, 1996, 2015))