/* Exercícios de interpretação de código 

1. É um loop que vai rodar enquanto a condição for verdadeira, que é i < 5, então enquanto i for menor que 5 o loop vai ser true. Imprimirá 10 no console
2.A) Será impresso todos os número maiores que 18 contidos no array. 19, 21, 23, 25, 27, 30
B) const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero, lista.indexOf(numero))
	}
}

3.*
  **
  ***
  ****               */ 

//Exercícios de escrita de código

//1.

const nomePets = []
const bichosEstimacao = +prompt("Quantos bichinhos de estimação você tem?");

    if(bichosEstimacao === 0){
        console.log("Que pena!, Você pode adotar um pet!");
    }else if(bichosEstimacao > 0){
        let i = 0
        while(i < bichosEstimacao){
            nomePets.push(prompt("Digite aqui o nome dos seus pets"));
            i++

        }console.log(nomePets);
    }

//2

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55];

for (let i = 0; i<array.length; i++){
    console.log(array[i]);
};

//B)

for (let i = 0; i<array.length; i++){
    console.log(array[i]/10);
}

//C)

for (let i of array){

    let novoArray = [];

    if ((i % 2) === 0){
        novoArray.push(i);
    }console.log(novoArray);
    
};

//D)

let arrayString = [];

for (let i = 0; i < array.length; i++){
    arrayString[i] =  `O elemento do índex ${i} é igual a ${array[i]}`;
}

for (let string of arrayString){
    console.log(string);
}

//E)

let minimo = array[0];
let maximo = array[0];

for (let numero of array){
    if(numero < minimo){
        minimo = numero;
    }else if(numero > maximo){
        maximo = numero;
    }
}console.log(`O maior número é ${maximo} e o menor é ${minimo}.`);

//Desafio

const numeroJogo = Math.floor(Math.random() * (100 - 1)) + 1;
let tentativas = 0;

console.log("Vamos jogar!");

do{
    var chute = +prompt("Chute um número de 1 a 100");
    if(chute < numeroJogo){
        console.log(`O número chutado foi: ${chute}. Errou, O número escolhido é menor!`);
    }
    if(chute > numeroJogo){
        console.log(`O número chutado foi: ${chute}. Errou. O número escolhido é maior!`);
    }
    tentativas++;
}
while(chute !== numeroJogo); console.log("Acertou!");
console.log(`O número de tentativas foi ${tentativas}.`);

//2. A alteração foi até simples de se fazer, pois utilizei de materiais externos para pesquisar sobre a nova sintaxe, onde substituí um prompt por um gerador de numero aleatório

// O que realmente foi difícil foi a construção de um loop otimizado rs
