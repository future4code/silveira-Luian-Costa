import { Request, Response } from "express";
import { PaymentBusiness } from "../business/PaymentBusiness";
import { CreditCardDTO } from "../types/CreditCardDTO";

export class PaymentController {
    constructor(
        private paymentBusiness: PaymentBusiness
    ) { }

    public registerCCPayment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { client_id, buyer_name, buyer_email, buyer_cpf, amount, payment_type, card_holder_name, card_number, card_expiration_date, card_cvv } = req.body

            const input: CreditCardDTO = {
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                amount,
                payment_type,
                card_holder_name,
                card_number,
                card_expiration_date,
                card_cvv
            }

            await this.paymentBusiness.registerCCPayment(input)

            res.status(201).send({ message: "Pagamento registrado" })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    }
}