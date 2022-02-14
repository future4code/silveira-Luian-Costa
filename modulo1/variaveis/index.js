/* Exercícios de interpretação de código

1- (10) e (10, 5);
2- (10, 10, 10);
3- let cargaHoraria = prompt("Quantas horas você trabalha por dia?")
   let diaria = prompt("Quanto você recebe por dia?")
   alert(`Voce recebe ${diaria/cargaHoraria} por hora`)*/

   //Exercícios de escrita de código - 1

   let nome = prompt("Qual seu nome?");
   let idade = prompt("Qual sua idade?");
   Number(idade)

   console.log(typeof nome);
   console.log(typeof idade);

   console.log("Olá " + nome + " você tem " + idade + " anos");

  //1-D)Foi impresso um erro de sintaxe por que foi declarada uma variável mas não foi atribuído valor
  //1-F) São Strings. A linguagem interpreta qualquer sequência de caracteres como se fossem strings, independente se são formadas por palavras ou números

//2
  let corDaRoupa = prompt("Você está usando uma roupa azul hoje?");
  let altura = prompt("Você tem mais de 1,65m de altura?");
  let cabelo = prompt("Você tem cabelo cacheado?")

  console.log("Você está usando uma roupa azul hoje? " + corDaRoupa);
  console.log("Você tem mais de 1,65m de altura? " + altura);
  console.log("Você tem cabelo cacheado? " + cabelo);

//3

  let a = 10
  let b = 25
  let c = a

  console.log("O novo valor de a é", b)
  console.log("O novo valor de b é", c)

//Desafio
  let num1 = prompt("Escolha um número qualquer");
  let num2 = prompt("Escolha outro número");
  Number(num1)
  Number(num2)
  let resultado = num1 + num2
  console.log(resultado);

//Segunda parte do Desafio

  let num3 = prompt("Escolha um número qualquer");
  let num4 = prompt("Escolha outro número");
  Number(num3)
  Number(num4)
  let resultado2 = num3 * num4;
  console.log(resultado2);