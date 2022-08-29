import { UserData } from "../data/UserData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/LoginInputDTO";
import { SignupInputDTO } from "../types/SignupInputDTO";
import { User } from "../types/UserInterface";

export class UserBusiness {
    constructor(
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private userData: UserData,
        private authenticator: Authenticator
    ) { }

    public signup = async (input: SignupInputDTO) => {
        try {
            //Desestruturação
            const { name, email, password } = input

            //Validação
            if (!name || !email || !password) {
                throw new Error("Preencha os dados corretamente")
            }

            if (email.indexOf("@") === -1) {
                throw new Error("Formato de email inválido")
            }

            if (password.length < 6) {
                throw new Error("Sua senha deve possuir pelo menos 6 dígitos")
            }

            //Confere se user existe ou nao
            const registeredUser = await this.userData.findUserByEmail(email)

            if (registeredUser) {
                throw new Error("Usuário já cadastrado.")
            }
            //Gerar ID
            const id = this.idGenerator.generateId()

            //Hashear password
            const hashedPassword = this.hashManager.generateHash(password)

            //Estrutura o user com as informação tratadas
            const user: User = {
                id,
                name,
                email,
                password: hashedPassword
            }
            await this.userData.insertUser(user)

            //Criar token
            const token = this.authenticator.generateToken({ id })

            //Retornar token
            return token
        } catch (error: any) {
            throw new Error(error.message || "Erro ao criar usuário, tente novamente.");
        }
    }

    public login = async (input: LoginInputDTO) => {
        try {
            const { email, password } = input

            //Validação de input
            if (!email || !password) {
                throw new Error("Preencha corretamente os dados de login")
            }

            //Confere se user existe ou não
            const user = await this.userData.findUserByEmail(email)

            //Validação de conta
            if (!user) {
                throw new Error("Usuário não existe")
            }

            //Validação da senha
            const hashCompare = await this.hashManager.compareHash(password, user.password)

            if (!hashCompare) {
                throw new Error("Senha incorreta!")
            }

            //Criar token
            const token = this.authenticator.generateToken({ id: user.id })

            //Retornar token
            return token

        } catch (error: any) {
            throw new Error(error.message || "Erro ao realizar login");
        }
    }
}

