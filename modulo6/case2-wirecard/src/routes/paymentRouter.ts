import express from "express";
import { PaymentBusiness } from "../business/PaymentBusiness";
import { PaymentController } from "../controller/PaymentController";
import { PaymentData } from "../data/PaymentData";

export const paymentRouter = express.Router();

const paymentBusiness = new PaymentBusiness(
    new PaymentData,
);

const paymentController = new PaymentController(paymentBusiness);

paymentRouter.post("/credit-card", paymentController.registerCCPayment);
paymentRouter.post("/boleto", paymentController.registerBoletoPayment)
paymentRouter.get("/credit-card/:id", paymentController.getCCPayment)
paymentRouter.get("/boleto/:id", paymentController.getBoletoPayment)