/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de BlackJack!");

if(confirm("Quer iniciar uma nova rodada?")){
  let cartasUsuario
  let cartaComputador

  do {
   cartasUsuario = [comprarCarta(), comprarCarta()]; 
   cartasComputador = [comprarCarta(), comprarCarta()];

  }while (pontuacaoCartas(cartasUsuario) === 22 || pontuacaoCartas(cartasComputador) === 22);

  while(pontuacaoCartas(cartasUsuario) <= 21){
     if(confirm(`Suas cartas são ${mostrarCarta(cartasUsuario)}. A carta revelada do computador é ${cartasComputador[0].texto}\nDeseja comprar mais uma carta?`)){
        cartasUsuario.push(comprarCarta());
     }else{
        break;
     }
  }
  if(pontuacaoCartas(cartasUsuario) > pontuacaoCartas(cartasComputador) && pontuacaoCartas(cartasUsuario) <=21 || pontuacaoCartas(cartasComputador) >21){
     alert("O usuário ganhou!");
  }else if(pontuacaoCartas(cartasUsuario) < pontuacaoCartas(cartasComputador) && pontuacaoCartas(cartasComputador) <=21 || pontuacaoCartas(cartasUsuario) >21){
     alert("O Computador ganhou!");
  }else if(pontuacaoCartas(cartasUsuario) == pontuacaoCartas(cartasComputador)){
     alert("Empate!");
  }
}else{
  alert("O jogo acabou!");

}

//Funções

function pontuacaoCartas(cartas){
   return cartas.reduce((soma, item) => soma += item.valor, 0);
}

function mostrarCarta(cartas){
   return cartas.reduce((soma, item) => soma += item.texto + ' ', '').slice(0, -1);
}