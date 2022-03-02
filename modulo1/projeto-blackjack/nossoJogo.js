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

console.log("Boas vindas ao jogo de Blackjack!");

while(confirm("Quer iniciar uma nova rodada?")){

   const cartaUsuario1 = comprarCarta();
   const cartaComputador1 = comprarCarta();
   const cartaUsuario2 = comprarCarta();
   const cartaComputador2 = comprarCarta(); 

   const pontuacaoUsuario = cartaUsuario1.valor + cartaUsuario2.valor; //Pontuação de cartas
   const pontuacaoComputador = cartaComputador1.valor + cartaComputador2.valor; //Pontuação de cartas

   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${pontuacaoUsuario}\nComputador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - ${pontuacaoComputador}`); //Imprime cartas + pontuação
  
   if (pontuacaoUsuario === pontuacaoComputador){
      console.log("Empate!");
   }else if (pontuacaoUsuario > pontuacaoComputador){
      console.log("O Usuário ganhou!");
   }else if (pontuacaoComputador > pontuacaoUsuario){
      console.log("O Computador ganhou!");
   }
   console.log("O jogo acabou");

   confirm("Quer jogar novamente?");
}
