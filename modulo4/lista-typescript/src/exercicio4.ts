enum setores {
    MARKETING = "Marketing",
    VENDAS = "Vendas",
    FINANCEIRO = "Financeiro"
}

type Colaboradores = {
    nome: string,
    salario: number,
    setor: setores,
    presencial: boolean
}

const arrayDeColaboradores: Colaboradores[] = [
    { nome: "Marcos", salario: 2500, setor: setores.MARKETING, presencial: true },
    { nome: "Maria", salario: 1500, setor: setores.VENDAS, presencial: false },
    { nome: "Salete", salario: 2200, setor: setores.FINANCEIRO, presencial: true },
    { nome: "João", salario: 2800, setor: setores.MARKETING, presencial: false },
    { nome: "Josué", salario: 5500, setor: setores.FINANCEIRO, presencial: true },
    { nome: "Natalia", salario: 4700, setor: setores.VENDAS, presencial: true },
    { nome: "Paola", salario: 3500, setor: setores.MARKETING, presencial: true }
]

function retornaMarketing(arrayDeColaboradores: Colaboradores[]) {
    const listaDeColaboradores = arrayDeColaboradores.filter((pessoa) => {
        return pessoa.setor === setores.MARKETING && pessoa.presencial === true;
    })
    return listaDeColaboradores
}
console.log(retornaMarketing(arrayDeColaboradores))