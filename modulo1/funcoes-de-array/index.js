/* Exercícios de interpretação de código

1.A)nome:'Amanda Rangel', apelido: 'Mandi' 0  //Imprime todos os itens do array, ao lado o índice e imprime todo o array completo
nome:'Laís Petra', apelido: 'Laura' 1 
nome:'Letícia Chijo', apelido: 'Chijo' 2 

2.A) ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo'] //Imprime todo os valores da propriedade "nome" dentro de um array

3.A) [nome: "Amanda Rangel", apelido: "Mandi"] //Imprime dentro de um array os dois primeiros itens de propriedade "apelido" que seja diferente de "Chijo"
     [nome: "Laís Petra", apelido: "Laura"]    */

//Exercícios de Escrita de código

//1

 const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ];
 
//A)

 const nomeDoguinhos = pets.map(item => item.nome);
 console.log(nomeDoguinhos);

//B)

 const racaDoguinhos = pets.filter(item => item.raca === "Salsicha");
 console.log(racaDoguinhos);

//C

 const promocaoPoodle = pets.filter(item => item.raca === "Poodle").map(item => `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`);
 console.log(promocaoPoodle);

//2

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//A

 const nomeProdutos = produtos.map(item => item.nome);
 console.log(nomeProdutos);

//B

 const descontoProdutos = produtos.map(item => {
     return item.preco * 0.95;
 })
 console.log(descontoProdutos);

//C

 const bebidasProdutos = produtos.filter(item => item.categoria === "Bebidas");
 console.log(bebidasProdutos);

//D

 const ypeProdutos = produtos.filter(item => item.nome.includes("Ypê"));
 console.log(ypeProdutos);

//E

 const compreYpe = ypeProdutos.map(item => `Compre ${item.nome} por R$${item.preco.toFixed(2).replace('.', ',')}`);
 console.log(compreYpe);

//Desafio

 const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//A

 const pokemonsEmOrdem = pokemons.map(item => item.nome).sort();
 console.log(pokemonsEmOrdem);

//B

 const tiposPokemons = pokemons.map(item => item.tipo);
 const listaTiposPokemons = tiposPokemons.filter((item, index) => {
     return tiposPokemons.indexOf(item) == index;
 })
 console.log(listaTiposPokemons);