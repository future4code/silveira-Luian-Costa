/* Exercícios de interpretação de código
1- a. false
   b. false
   c. true
   d. boolean

2- O valor inserido nas variáveis será compreendido como string
então apareceria no console os dois numero em sequência. O correto
seria classificar o "prompt" como "Number"*/

//3
let primeiroNumero = Number(prompt("Digite um numero!"));
let segundoNumero = Number(prompt("Digite outro numero!"));

const soma = primeiroNumero + segundoNumero;

console.log(soma);

//Exercícios de escrita de código
//1
let idade1 = Number(prompt("Qual sua idade?"));
let idade2 = Number(prompt("Qual a idade do seu melhor amigo(a)?"));
let diferenca = idade1 - idade2;

console.log("Sua idade é maior do que a do seu amigo?", idade1 > idade2);
console.log("A diferença de idade é", diferenca);

//2
let numeroPar = Number(prompt("Insira um número par"));
let restoDivisao = numeroPar % 2;
console.log(restoDivisao);

/*O programa sempre irá retornar "0" caso o parametro inserido seja um número par.
Caso seja inserido um número ímpar, o programa retornará apenas o resto da divisão*/

//3
let idade = Number(prompt("Qual sua idade?"));
let idadeEmMeses = idade * 12;
let idadeEmDias = idadeEmMeses * 30;
let idadeEmHoras = idadeEmDias * 24;

console.log("Idade em meses:", idadeEmMeses);
console.log("Idade em dias:", idadeEmDias);
console.log("Idade em horas:", idadeEmHoras);

//4
let numero1 = Number(prompt("Insira um número"));
let numero2= Number(prompt("Insira outro número"));

console.log("O primeiro número é maior que o segundo?", numero1 > numero2);
console.log("O primeiro número é igual ao segundo?", numero1 === numero2);
console.log("O primeiro número é divisível pelo segundo?", (numero1 % numero2) === 0);
console.log("O segundo número é divisível pelo primeiro?", (numero2 % numero1) === 0);

//Desafio

//1-A) Graus Fahrenheit(°F) para Kelvin(K)

let grausFahrenheit = 77;
kelvin = (grausFahrenheit - 32)*(5/9) + 273.15;
console.log("77 Fahrenheit é equivalente à:", kelvin, "Kelvin");

//B) Graus Celsius(°C) para Graus Fahrenheit (°F)

let grausCelsius = 80;
grausFahrenheit = grausCelsius * (9/5) + 32;
console.log("80 Graus Celsius é equivalente à:", grausFahrenheit, "Fahrenheit");

//C) Graus Celsius(°C) para Graus Fahrenheit (°F) e para Kelvin(K)

let grausCelsius2 = 30;
grausFahrenheit = grausCelsius2 * (9/5) + 32;
kelvin = grausCelsius2 + 273;
console.log("30 Graus Celsius é equivalente à", grausFahrenheit,"Fahrenheit e à", kelvin,"Kelvin");

//D) Insira o valor em graus Celsius que deseja converter

let grausCelsiusInserido = Number(prompt("Insira o valor em Graus Celsius que deseja converter"));
grausFahrenheit = grausCelsiusInserido * (9/5) + 32;
kelvin = grausCelsiusInserido + 273;
console.log(grausCelsiusInserido, "Graus Celsius é equivalente à" , grausFahrenheit,"Fahrenheit, e à", kelvin,"Kelvin");

//2-
let kWHora = Number(prompt("Informe a quantidade de quilowatt-hora"));

//A
console.log("O consumo de energia de 280 KW/H é de R$", 280 * 0.05);

//B
let descontoValor = Number(prompt("Insira a % de desconto"));
let desconto1 = kWHora * 0.05;
let desconto2 = (desconto1 * descontoValor) / 100;
console.log("O valor com desconto é de:", desconto2);