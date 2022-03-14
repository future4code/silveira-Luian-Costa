ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui

  let arrayNumeroEscolhido = arrayDeNumeros.filter((item)=>{return item===numeroEscolhido})
  let quantidadeDeNumeros = arrayNumeroEscolhido.length

  if (quantidadeDeNumeros === 0){
    return 'Número não encontrado'
  }else{
  return `O número ${numeroEscolhido} aparece ${quantidadeDeNumeros}x`
 }
}
ˋˋˋ