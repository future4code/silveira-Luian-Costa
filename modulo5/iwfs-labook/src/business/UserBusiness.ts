import { UserData } from "../data/UserData";
import { User } from "../models/UserModel";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { idGenerator } from "../services/IdGenerator";
import { LoginInputDTO } from "../types/LoginInputDTO";
import { SignupInputDTO } from "../types/signupInputDTO";

export class UserBusiness {
    async signup(input: SignupInputDTO) {
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
            const registeredUser = await new UserData().findUserByEmail(email)

            if (registeredUser) {
                throw new Error("Usuário já cadastrado.")
            }
            //Gerar ID
            const id = new idGenerator().generateId()

            //Hashear password
            const hashedPassword = new HashManager().generateHash(password)

            //Estrutura o user com as informação tratadas
            const user = new User(
                id,
                name,
                email,
                hashedPassword
            )
            await new UserData().insertUser(user)

            //Criar token
            const token = new Authenticator().generateToken({ id })

            //Retornar token
            return token
        } catch (error: any) {
            throw new Error(error.message || "Erro ao criar usuário, tente novamente.");
        }
    }

    async login(input: LoginInputDTO) {
        try {
            const { email, password } = input

            //Validação de input
            if (!email || !password) {
                throw new Error("Preencha corretamente os dados de login")
            }

            //Confere se user existe ou não
            const user = await new UserData().findUserByEmail(email)

            //Validação de conta
            if (!user) {
                throw new Error("Usuário não existe")
            }

            //Validação da senha
            const hashCompare = await new HashManager().compareHash(password, user.password)

            if (!hashCompare) {
                throw new Error("Senha incorreta!")
            }

            //Criar token
            const token = new Authenticator().generateToken({ id: user.id })

            //Retornar token
            return token

        } catch (error: any) {
            throw new Error(error.message || "Erro ao realizar login");
        }
    }
}

