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

const cartasUsuario = [comprarCarta(), comprarCarta()];
const cartasComputador = [comprarCarta(), comprarCarta()];

do{confirm("Quer iniciar uma nova rodada?")
if (confirm) {
   if (cartasUsuario[0].texto.indexOf("A") === "A" && cartasUsuario[1].texto.indexOf("A") === "A" || cartasComputador[0].texto.indexOf("A") === "A" && cartasComputador[1].texto.indexOf("A") === "A")
      cartasUsuario.pop(), cartasUsuario.pop(), cartasComputador.pop(), cartasComputador.pop()
   var comprarCarta1 = () => confirm(`Suas cartas são ${cartasUsuario[0].texto, cartasUsuario[1].texto}. A carta revelada do computador é ${cartasComputador[0].texto}.\nDeseja comprar mais uma carta?`);   ;
 }
}
while(cartasUsuario < 21){
   cartasUsuario.push(comprarCarta1());
 }

alert(`Suas cartas são ${cartasUsuario}. A carta revelada do computador é ${cartasComputador[0].texto}.`);

console.log(`Cartas Jogador: ${cartasUsuario}\nPontos Computador: ${cartasComputador[0].valor} + ${cartasComputador[1].valor}\nCartas Computador: ${cartasComputador[0].texto} ${cartasComputador[1].texto}\nPontos Jogador: ${cartasUsuario[0]}\nPontos Computador: ${cartasUsuario[1]}.`);

function veririfica21(cartasUsuario, cartasComputador){
   if ((cartasComputador > cartasUsuario) < 22) {
      return console.log("Você venceu!");
   } else if ((cartasComputador < cartasUsuario) < 22) {
      return console.log("O Computador venceu!");
   } else if (cartasComputador === cartasComputador) {
      return console.log("Empate!");
   }
}