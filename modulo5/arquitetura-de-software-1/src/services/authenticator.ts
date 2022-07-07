import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types/user"

export class Authenticator {
   public generateToken(payload: authenticationData): string {
      const token = jwt.sign(
         {
            id: payload.id,
            role: payload.role
         },
         process.env.JWT_KEY as string,
         {
            expiresIn: "50min"
         }
      );
      return token
   }

   public getData(token: string): authenticationData {
      const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
      const result = {
         id: payload.id,
         role: payload.role
      }
      return result
   }
}


export const getTokenData = (token: string): authenticationData => {
   return jwt.verify(token, process.env.JWT_KEY as string) as authenticationData
}