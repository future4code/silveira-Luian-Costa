//Exercício 1 - A) O constructor serve para inicializar variáveis que devem ser passadas
//no momento de criação de uma instância. 

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

    constructor(cpf: string, name: string, age: number) {
        console.log("Chamando o construtor da classe UserAccount")
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }

    public getCpf(): void {
        console.log(this.cpf)
    }

    public getName(): void {
        console.log(this.name)
    }

    public getAge(): void {
        console.log(this.age)
    }
    public getBalance(): void {
        console.log(this.balance)
    }

    public getTransactions(): void {
        console.log(this.transactions)
    }
    public setTransaction(
        newTransaction: Transaction
    ) {
        this.transactions.push(newTransaction)
    }
}

const luian = new UserAccount("123456789", "Luian Costa", 21)
console.log(luian.getCpf())

//C)

//Exercício 2

class Transactions {
    private date: string;
    private value: number;
    private description: string;

    constructor(date: string, value: number, description: string) {
        this.date = date;
        this.value = value;
        this.description = description
    }
    public getDate() {
        console.log(this.date)
    }
    public getValue() {
        console.log(this.value)
    }
    public getDescription() {
        console.log(this.description)
    }
}

const luianTransaction = new Transactions("20/05/2022", 50, "50 real de paçoca")

//Exercício 3

class Bank {
    private accounts: UserAccount[];

    constructor(accounts: UserAccount[]) {
        this.accounts = accounts;
    }

}

const bancoGenerico = new Bank([])