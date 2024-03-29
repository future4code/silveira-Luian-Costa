import { CustomError } from "../errors/CustomError";
import { BoletoDTO, CreditCardDTO } from "../types/CreditCardDTO";
import { DataBase } from "./DataBase";

export class PaymentData extends DataBase {
    private TABLE_NAME1 = "wirecard_credit_card2";
    private TABLE_NAME2 = "wirecard_boleto2"

    public registerCCPayment = async (newPayment: CreditCardDTO) => {
        try {
            await DataBase.connection(this.TABLE_NAME1)
                .insert(newPayment);
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage);
        }
    }

    public registerBoletoPayment = async (newPayment: BoletoDTO) => {
        try {
            await DataBase.connection(this.TABLE_NAME2)
                .insert(newPayment)
        } catch (error: any) {
            throw new CustomError(500, error.sqlMessage)
        }
    }

    public getCCPayment = async (client_id: string) => {
        try {
            const [result] = await DataBase.connection(this.TABLE_NAME1)
                .select("*")
                .where({ client_id })
            return result
        } catch (error: any) {
            throw new CustomError(500, "Pagamento não encontrado")
        }
    }

    public getBoletoPayment = async (client_id: string) => {
        try {
            const [result] = await DataBase.connection(this.TABLE_NAME2)
                .select("*")
                .where({ client_id })
            return result
        } catch (error: any) {
            throw new CustomError(500, "Pagamento não encontrado")
        }
    }
}