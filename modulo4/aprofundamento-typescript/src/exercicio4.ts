//4

type pokemon = {
    name: string,
    types: string,
    healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// B) "tsc nome-do-arquivo.ts"
// C) sim => "tsc && node ./build/nome-do-arquivo.js"
// D) "tsc arquivo1.ts arquivo2.ts arquivo3.ts"