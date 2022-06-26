//Exercício 1 

class User {
    private id: string;
    private email: string;
    private name: string;
    private password: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string
    ) {
        console.log("Chamando o construtor da classe User")
        this.id = id
        this.email = email
        this.name = name
        this.password = password
    }

    public getId(): string {
        return this.id
    }

    public getEmail(): string {
        return this.email
    }

    public getName(): string {
        return this.name
    }
}

const luiao = new User("1", "luiao@email.com", "Luiao", "123luiao"); //Instância 1

//A) Não, pois a senha é um atributo privado
//B) Apenas uma vez

//Exercício 2

class Customer extends User {
    public purchaseTotal: number = 0;
    private creditCard: string;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        creditCard: string
    ) {
        super(id, email, name, password);
        console.log("Chamando o construtor da classe Customer");
        this.creditCard = creditCard;
    }

    public getCreditCard(): string {
        return this.creditCard;
    }
}

const luiaoCustomer = new Customer("1", "luiao@email.com", "Luiao", "123luiao", "visa123981238"); //Instância 2

//A) Foi impressa uma vez
//B) Foi impressa duas vezes, pois existem duas instâncias atualmente.

//Exercício 3

console.log(luiaoCustomer.getName());
console.log(luiaoCustomer.getEmail());
console.log(luiaoCustomer.getId());
console.log(luiaoCustomer.getCreditCard());

//A) Não, pois a senha é um atributo privado

//Exercício 4
/*

public introduceYourself(): void {
     return `Olá, eu sou o usuário ${this.name}`
}

*/