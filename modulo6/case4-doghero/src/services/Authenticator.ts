import * as jwt from "jsonwebtoken"
import { AuthenticationData } from "../types/AuthenticationType"

export class Authenticator {
    public generateToken(payload: AuthenticationData): string {
        const token = jwt.sign(
            {
                id: payload.id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: "30m"
            }
        )
        return token
    }

    public getData(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any
        const result = {
            id: payload.id
        }
        return result
    }

}