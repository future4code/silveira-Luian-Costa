import { PaymentData } from "../data/PaymentData";
import { CustomError } from "../errors/CustomError"
import { CreditCardDTO } from "../types/CreditCardDTO";

export class PaymentBusiness {
    constructor(
        private paymentData: PaymentData
    ) { }

    public registerCCPayment = async (input: CreditCardDTO) => {
        try {
            const { client_id, buyer_name, buyer_email, buyer_cpf, amount, payment_type, card_holder_name, card_number, card_expiration_date, card_cvv } = input;

            if (!client_id) {
                throw new Error("Cliente inexistente.");
            };

            if (!buyer_name || !buyer_email || !buyer_cpf) {
                throw new Error("Comprador inválido.");
            };
            if (buyer_cpf.length !== 14) {
                throw new Error("CPF inválido");
            }

            if (buyer_email.indexOf("@") === -1) {
                throw new Error("Formato de email inválido.")
            };

            if (!amount) {
                throw new Error("Insira o valor do pagamento.");
            };

            if (payment_type.toUpperCase() !== "CREDITCARD") {
                throw new Error("Método de pagamento inválido.");
            };

            if (!card_cvv || !card_expiration_date || !card_holder_name || !card_number) {
                throw new Error("Insira corretamento os dados do cartão de crédito.");
            };

            const cardNumberVerify = card_number.split(" ").join("");

            if (card_cvv.length !== 3 || card_expiration_date.length !== 5 || cardNumberVerify.length !== 16) {
                throw new Error("Cartão de Crédito inválido.");
            };

            const newPayment: CreditCardDTO = {
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

            await this.paymentData.registerCCPayment(newPayment);
        } catch (error: any) {
            throw new CustomError(400, "Ocorreu um erro. Tente novamente!!!");
        }
    }
}