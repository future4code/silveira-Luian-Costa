//Exercício 1 - A) O constructor serve para inicializar variáveis que devem ser passadas
// no momento de criação de uma instância. 

//B) Foi chamada apenas uma vez

type Transaction = {
    description: string,
    value: number,
    date: string
}

class UserAccount {
    private cpf: string;
    private name: string;
    private age: number;
    private balance: number = 0;
    private transactions: Transaction[] = [];

    constructor(
        cpf: string,
        name: string,
        age: number,
    ) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

}

const luian = new UserAccount("123456789", "Luian Costa", 21)