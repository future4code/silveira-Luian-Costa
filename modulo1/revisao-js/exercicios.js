// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01

function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02

function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03

function retornaArrayOrdenado(array) {
  return array.sort((a,b) => a-b)
}

// EXERCÍCIO 04

function retornaNumerosPares(array) {
  return array.filter((array) => array % 2 === 0)
}

// EXERCÍCIO 05

function retornaNumerosParesElevadosADois(array) {
  let numerosPares = [];
  for(let num of array){
      if(num % 2 === 0){
          num = num * num
          numerosPares.push(num)
      }
  }return numerosPares
}

// EXERCÍCIO 06

function retornaMaiorNumero(array) {
  return Math.max(...array)
}

// EXERCÍCIO 07

function retornaObjetoEntreDoisNumeros(num1, num2) {
  const objeto = { 
    maiorNumero : Math.max(num1,num2),
    maiorDivisivelPorMenor : (Math.max(num1,num2) % Math.min(num1,num2)) == 0,
    diferenca : Math.max(num1,num2) - Math.min(num1,num2),
 }
 return objeto
}

// EXERCÍCIO 08

function retornaNPrimeirosPares(n) {
  let primeirosPares = [];
   for(let i = 0; primeirosPares.length < n; i++){
       if(i % 2 == 0){
           primeirosPares.push(i);
       }
   }
  return primeirosPares
}

// EXERCÍCIO 09

function classificaTriangulo(ladoA, ladoB, ladoC) {
  if(ladoA === ladoB && ladoA === ladoC && ladoB === ladoC){
      return "Equilátero"
  }else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
      return "Escaleno"
  }else{
      return "Isósceles"
  }
}

// EXERCÍCIO 10

function retornaSegundoMaiorESegundoMenor(array) {
   let novoArray = array.sort((a,b) => a-b);
   return [novoArray[novoArray.length - 2], novoArray[1]]
}

// EXERCÍCIO 11

function retornaChamadaDeFilme(filme) {
    const chamadaFilme = {
        nome: 'O Diabo Veste Prada',
        ano: 2006,
        diretor: 'David Frankel',
        atores: ['Meryl Streep', ' Anne Hathaway', ' Emily Blunt', ' Stanley Tucci']
     }
return `Venha assistir ao filme ${chamadaFilme.nome}, de ${chamadaFilme.ano}, dirigido por ${chamadaFilme.diretor} e estrelado por ${chamadaFilme.atores}.`
}


// EXERCÍCIO 12

function retornaPessoaAnonimizada(pessoa) {
   return novoObjeto = {
       ...pessoa,
       nome: "ANÔNIMO"
   }
}

// EXERCÍCIO 13A

function retornaPessoasAutorizadas(pessoas) {
   return pessoas.filter(item => item.altura >= 1.5 && item.idade > 14 && item.idade < 60)
}

// EXERCÍCIO 13B

function retornaPessoasNaoAutorizadas(pessoas) {
   return pessoas.filter(item => item.altura < 1.5 || item.idade <= 14 || item.idade > 60)
}

// EXERCÍCIO 14

function retornaContasComSaldoAtualizado(contas) {
   for (let item of contas) {
       for (let valor of item.compras){
           item.saldoTotal = item.saldoTotal - valor
        }
       item.compras = []
    }
   return contas
}

// EXERCÍCIO 15A

function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort((item1, item2) => (item1.nome, item2.nome));
}

// EXERCÍCIO 15B

function retornaArrayOrdenadoPorData(consultas) {
   
}