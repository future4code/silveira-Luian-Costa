// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaRetangulo = Number(prompt("Insira a altura do retângulo"));
  const larguraRetangulo = Number(prompt("Insira a largura do retângulo"));
  const calculoArea = (alturaRetangulo * larguraRetangulo);

  console.log(calculoArea);

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt("Qual o ano atual"));
  const anoDeNascimento = Number(prompt("Qual o seu ano de nascimento?"));
  const calculoAno = (anoAtual - anoDeNascimento);

  console.log(calculoAno);

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return imc = peso / (altura * altura);

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nomeDoUsuario = prompt("Qual o seu nome?");
  const idadeDoUsuario = Number(prompt("Qual a sua idade?"));
  const emailDoUsuario = prompt("Qual o seu e-mail?");
  
console.log(`Meu nome é ${nomeDoUsuario}, tenho ${idadeDoUsuario} anos, e o meu email é ${emailDoUsuario}.`);

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = prompt("Qual sua cor favorita? Diga a primeira cor");
  const segundaCor = prompt("Qual sua cor favorita? Diga a segunda cor");
  const terceiraCor = prompt("Qual sua cor favorita? Diga a terceira cor");
  const listaDeCores = [primeiraCor, segundaCor, terceiraCor];

  console.log(listaDeCores);
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase();

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return lucroOuPrejuizo = Number(custo / valorIngresso)

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length;

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0];

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array.pop();

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  const primeiroNum = array.shift();
  const ultimoNum = array.pop();
  array.unshift(ultimoNum);
  array.push(primeiroNum);
  return array;

}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toLowerCase() === string2.toLowerCase();

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

  const perguntaAno = Number(prompt("Qual o ano atual?"));
  const perguntaNascimento = Number(prompt("Qual seu ano de nascimento?"));
  const perguntaRG = Number(prompt("Em qual ano sua carteira de identidade foi emitida?"));
  const renovar = perguntaAno - perguntaRG;

  if(perguntaAno - perguntaNascimento <= 20 && renovar >= 5){
    console.log(true);
  }else if(perguntaAno - perguntaNascimento > 20 && perguntaAno - perguntaNascimento <=50 && renovar >=10){
    console.log(true);
  }else if(perguntaAno - perguntaNascimento > 50 && renovar >=15){
    console.log(true);
  }else{
    console.log(false);
  }

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  let anoBissexto = ano % 4;
  let anoBissexto2 = ano % 100;
  let anoBissexto3 = ano % 400;
  
  if(anoBissexto == 0 && anoBissexto2 != 0 || anoBissexto3 == 0){
    return true;
  }else{
    return false;
  }

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
const idadeLabenu = prompt("Você tem mais de 18 anos?");
const ensinoMedio = prompt("Você possui ensino médio completo?");
const disponibilidade = prompt("Você possui disponibilidade exclusiva durante os horários do curso?");

console.log(idadeLabenu === "sim" && ensinoMedio === "sim" && disponibilidade === "sim");

}