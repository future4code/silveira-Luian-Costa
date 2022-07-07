import { hash } from "../services/hashManager"
import { generateToken } from "../services/authenticator";
import { generateId } from "../services/idGenerator"
import { user, userInput } from "../types/user";
import { UserData } from "../data/UserData";

export class UserBusiness {
    public async signup(user: userInput) {
        const { name, email, password, role } = user

        if (!name || !email || !password || !role) {
            throw new Error('Preencha os campos "name","nickname", "email" e "password"')
        }

        const id: string = generateId()

        const cypherPassword = await hash(password);

        await new UserData().insertUser({
            id,
            name,
            email,
            password: cypherPassword,
            role
        })

        const token: string = generateToken({ id, role: role })

        return token
    }

    public async login(req: Request, res: Response) {
        try {

        } catch (error: any) {

        }
    }
}