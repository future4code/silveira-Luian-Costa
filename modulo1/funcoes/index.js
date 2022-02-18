/* 
Exercícios de interpretação de código

1.A) 10 e 50

B) Nada apareceria no console

2.A) Retorna o texto em caixa baixa e um booleano indicando se existe ou não a palavra cenoura na string, true caso exista e false caso não exista.

B) i. eu gosto de cenoura (true)

  ii. cenoura é com pra vista (true)

 iii. cenouras crescem na terra (false)   */
 
 //Exercícios de escrita de código

 //1.A)

 function minhasInformacoes(){
    console.log("Eu sou Luian, tenho 20 anos, moro em Rondonópolis e sou estudante");
 }
minhasInformacoes();

//B)

function retornaString(nome, idade, cidade, profissao){
    let frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`;
    return frase    
}

retornaString("Luian", "20", "Rondonópolis", "estudante");

//2.A) 

function somarTodos(num1, num2){
    let soma = num1 + num2;
    console.log(soma);

}
somarTodos(5, 5);

//B)

function maiorOuIgual(num1, num2){
    console.log(num1 >= num2)
}
maiorOuIgual(2, 5);

//C)

function tamanhoString (texto){
    console.log(texto.toUpperCase());
    console.log(texto.length);
   
}
tamanhoString("Por favor função funciona");

//3.

const numero1 = Number(prompt("Insira um número"));
const numero2 = Number(prompt("Insira outro número"));

console.log(`Número inseridos: ${numero1} e ${numero2}`)

function somarNumero(numero1, numero2){
    let resultado = numero1 + numero2;
    console.log("Soma: ", resultado);
}
somarNumero(numero1, numero2);

function subtrairNumero(numero1, numero2){
    let subtracao = numero1 - numero2;
    console.log("Diferença: ", subtracao);
}
subtrairNumero(numero1, numero2);

function dividirNumero(numero1, numero2){
    let divisao = numero1 / numero2;
    console.log("Divisão: ", divisao);
}
dividirNumero(numero1, numero2);

function multiplicarNumero(numero1, numero2){
    let multiplicacao = numero1 * numero2;
    console.log("Multiplicação: ", multiplicacao);
}
multiplicarNumero(numero1, numero2);

//Desafio

//1.A)

const arrowFunction = (parametro) => {console.log(parametro)};
arrowFunction("parâmetro");

//B

const arrowFunction2 = (parametro1, parametro2) => {console.log(parametro1 + parametro2)};
arrowFunction2(10, 10);

//2.

const teoremaPitagoras = (a, b) => {return ((a * a) + (b * b))**0.5};
console.log(teoremaPitagoras(5, 10));