type amostraDeDados = {
    maior: number,
    menor: number,
    media: number
}

function obterEstatisticas(numeros: number[]): amostraDeDados {
    const numerosOrdenados: number[] = numeros.sort(
        (a: number, b: number) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: amostraDeDados = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
console.log(obterEstatisticas([20, 5, 8]))