/* Exercícios de interpretação de código

1.A) O código recebe um número e verifica se possui resto, caso não possua ele retorna "Passou no teste", se possuir ele retorna "Nao passou no teste"
B) Números inteiros, onde a divisão é exata
C) Números onde, após a divisão, o restante será maior ou igual a zero e menor que o divisor

2.A) Dizer o preço da fruta que é inserida como parâmetro
B) O preço será 2.25
C) Seria impresso "O preço da Pêra é R$ 5". O switch rodaria com o preço 5.5 e depois seria substituído pelo 5, pois o default é a útilma condição

3.A) Recebendo um número por um prompt
B) Se fosse 10 - "Esse número passou no teste". Caso fosse -10 nada seria impresso no console por que a variável com mensagem foi declara dentro da condição ("numero > 0")
C) Haverá um erro no console informando que "mensagem" não foi declarada, pois foi declarada dentro da condição e não fora para que pudesse ser usada no escopo maior da função.  */

// Exercícios de escrita de código

//1

const idadeUsuario = Number(prompt("Qual sua idade?"));

if(idadeUsuario >= 18){
    console.log("Você pode dirigir.");
}else{
    console.log("Você não pode dirigir.");
}

//2

const turno = prompt("Qual período voce estuda?");

if (turno === "M"){
    console.log("Bom Dia!");
}else if (turno === "V"){
    console.log("Boa Tarde!");
}else if (turno === "N"){
    console.log("Boa Noite!");
}

//3

switch (turno){
    case "M":
        console.log("Bom Dia!")
        break
    case "V":
        console.log("Boa Tarde!")
        break
    case "N":
        console.log("Boa Noite!")
        break
}

//4

const generoFilme = prompt("Qual gênero de filme você quer assistir?");
const valorIngresso = Number(prompt("Qual o valor do ingresso?"));
const lanchinho = prompt("Qual lanchinho você vai comprar?") //Desafio

if (generoFilme === "Fantasia" && valorIngresso < 15){
    console.log(`Bom Filme! Aprovei o seu ${lanchinho}`);
}else{
    console.log("Escolha outro filme :(");
}

//Desafio

const nomeCompleto = prompt("Qual o seu nome completo?");
const tipoDeJogo = prompt("Qual o tipo de jogo? IN ou DO?");
const etapaDoJogo = prompt("Qual a etapa do jogo? SF, DT ou FI?");
const categoria = Number(prompt("Qual a categoria?"));
const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos?"));