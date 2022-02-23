/* Exercícios de interpretação de código

1.A) "Matheus Nachtergaele"
"Virginia Cavendish"
"Globo" "14h"

2.A) nome: "Juca", idade:3, raca: "SRD"
nome: "Juba", idade:3, raca: "SRD"
nome: "Jubo", idade:3, raca: "SRD"

B) Cria uma cópia do objeto que pode ser manipulada do jeito que quiser

3.A) False
Undefined */

//Exercícios de escrita de código

//1.A) 

const pessoaObjeto = {
    nome : "Luian",
    apelidos: ["Lulan", " Lu", " Lui"]
}

function imprimePessoa (objeto){
console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]}, ${objeto.apelidos[2]}`);
}

//B)

const pessoaNova = {...pessoaObjeto, apelidos:["Lululul", " ULULUL", " WABALUBDUBDUB"]};
imprimePessoa(pessoaNova);

//2.A) 

const pessoa = {
	nome: "Jorge", 
    idade: 23, 
    profissao: "Instrutor"
}
const pessoa2 = {
    nome: "Careca",
    idade: 18,
    profissao: "Barbeiro"
}

function imprimePessoa2(objeto2){
    let listaDeInformacoes = [objeto2.nome, objeto2.nome.length, objeto2.idade, objeto2.profissao, objeto2.profissao.length];
    return listaDeInformacoes;
}
console.log(imprimePessoa2(pessoa))

//3.A)

const carrinho = []

const fruta = {
    nome: "Melancia",
    disponibilidade: true
}
const fruta2 = {
    nome: "Banana",
    disponibilidade: false
}
const fruta3 = {
    nome: "Morango",
    disponibilidade: true
}

function sacolaoFeira(objeto){
    carrinho.push(objeto);
}
sacolaoFeira(fruta);
sacolaoFeira(fruta2);
sacolaoFeira(fruta3);
console.log(carrinho);

//Desafio

//1

function perguntaUsuario(){    
    const dadosUsuario = {
        nome : prompt("Qual seu nome?"),
        idade: prompt("Qual sua idade?"),
        profissao: prompt("Qual sua profissão?")
    }
    console.log(dadosUsuario, typeof dadosUsuario)
}
perguntaUsuario();

//2

const filme1 = {
    nome : "Blade Runner 2049",
    lancamento : 2017
}
const filme2 = {
    nome : "Matrix",
    lancamento : 1999
}

function confereFilme(objetoF1, objetoF2){

console.log(`${objetoF1.nome} foi lançado antes de ${objetoF2.nome}? ${objetoF1.lancamento < objetoF2.lancamento}.
${objetoF1.nome} foi lançado no mesmo ano de ${objetoF2.nome}? ${objetoF1.lancamento === objetoF2.lancamento}.`);

}

confereFilme(filme1, filme2);

//3

function controleEstoqueFruta (fruta){
    return fruta = !fruta.disponibilidade 

}
console.log(controleEstoqueFruta(fruta));
