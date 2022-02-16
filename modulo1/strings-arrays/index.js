/*
Exercícios de interpretação de código

1- a. undefined
   b. null
   c. 11
   d. 3
   e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
   f. 9

2- "SUBI NUM ÔNIBUS EM MIRROCOS"

*/

//Exercícios de escrita de código

//1.

const nomeDoUsuario = prompt("Qual o seu nome?");
const emailDoUsuario = prompt("Qual o seu e-mail?");

console.log(`o e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

//2.

const comidasPreferidas = ['churrasco', ' lasanha', ' panqueca', ' feijoada', ' macarronada'];

console.log(comidasPreferidas);
console.log(`essas são as minhas comidas preferidas:
 ${comidasPreferidas[0]}
${comidasPreferidas[1]}
${comidasPreferidas[2]}
${comidasPreferidas[3]}
${comidasPreferidas[4]}.`)

comidasPreferidas [1] = prompt("Qual sua comida favorita?");
console.log(comidasPreferidas)

//3.

let listaDeTarefas = []; 

const tarefa1 = prompt("Qual a primeira tarefa que você precisa realizar?");
const tarefa2 = prompt("Qual a segunda?");
const tarefa3 = prompt("Qual a terceira?");

listaDeTarefas.push(tarefa1, tarefa2, tarefa3); //Empurra as tarefas dentro do array
console.log(listaDeTarefas); //Imprime a lista com as alterações

const tarefaRealizada = Number(prompt("Qual o numero da tarefa que você já realizou?"));
listaDeTarefas.splice(tarefaRealizada -1 , 1); //Remove a tarefa declarada com o ajuste de índice

console.log(listaDeTarefas); //Imprime a lista novamente com a tarefa removida