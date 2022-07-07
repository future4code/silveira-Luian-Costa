import { Authenticator } from "../services/authenticator";
import { generateId } from "../services/idGenerator"
import { user, userInput, userLogin } from "../types/user";
import { UserData } from "../data/UserData";
import { HashManager } from "../services/hashManager";

export class UserBusiness {
    public async signup(user: userInput) {
        if (!user.name || !user.email || !user.password || !user.role) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const id: string = generateId()

        const cypherPassword = await new HashManager().generateHash(user.password);

        await new UserData().insertUser({
            id,
            name: user.name,
            email: user.email,
            password: cypherPassword,
            role: user.role
        })

        const token: string = await new Authenticator().generateToken({ id, role: user.role })

        return token
    }

    public async login(user: userLogin) {
        try {

            const userData = {
                email: user.email,
                password: user.password
            };

            const loginUser = await new UserData().getUserByEmail(userData.email);
            console.log(loginUser)

            const compareResult = new HashManager().compareHash(userData.password, loginUser.password);
            console.log(compareResult)

            if (!compareResult) {
                throw new Error("Invalid credentials!");
            }

            const token = new Authenticator().generateToken({ id: loginUser.id, role: loginUser.role })

            return token

        } catch (error: any) {
            throw new Error("Erro ao logar");
        }
    }

}