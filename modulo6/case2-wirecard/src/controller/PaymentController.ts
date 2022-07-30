import { Request, Response } from "express";
import { PaymentBusiness } from "../business/PaymentBusiness";
import { BoletoDTO, CreditCardDTO } from "../types/CreditCardDTO";

export class PaymentController {
    constructor(
        private paymentBusiness: PaymentBusiness
    ) { }

    public registerCCPayment = async (req: Request, res: Response): Promise<void> => {
        try {
            const { client_id, buyer_name, buyer_email, buyer_cpf, amount, payment_type, card_holder_name, card_number, card_expiration_date, card_cvv } = req.body;

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
            };

            await this.paymentBusiness.registerCCPayment(input);

            res.status(201).send({ message: "Pagamento registrado" });
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message });
        }
    }

    public registerBoletoPayment = async (req: Request, res: Response) => {
        try {
            const { client_id, buyer_name, buyer_email, buyer_cpf, amount, payment_type } = req.body

            const input: BoletoDTO = {
                client_id,
                buyer_name,
                buyer_email,
                buyer_cpf,
                amount,
                payment_type
            }

            await this.paymentBusiness.registerBoletoPayment(input)

            res.status(201).send({ message: "Pagamento registrado" })
        } catch (error: any) {
            res.status(error.statusCode || 400).send({ message: error.message })
        }
    }
}