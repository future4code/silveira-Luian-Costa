import { CustomError } from "../errors/CustomError";
import { CreditCardDTO } from "../types/CreditCardDTO";
import { DataBase } from "./DataBase";

export class PaymentData extends DataBase {
    private TABLE_NAME = "wirecard_credit_card2";

    public registerCCPayment = async (newPayment: CreditCardDTO) => {
        try {
            await DataBase.connection(this.TABLE_NAME)
                .insert(newPayment);
        } catch (error: any) {
            throw new CustomError(400, error.sqlMessage);
        }
    }
}