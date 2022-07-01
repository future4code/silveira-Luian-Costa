import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { AuthenticationData } from "../types";

dotenv.config();

export class Authenticator {
    public generateToke(payload: AuthenticationData): string {
        const token = jwt.sign(
            {
                id: payload.id
            },
            process.env.JWT_KEY as string,
            {
                expiresIn: "50m"
            }
        );
        return token
    }

    public getData(token: string): AuthenticationData {
        const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
        const result = {
            id: payload.id
        }
        return result
    }
}