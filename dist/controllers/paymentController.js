"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentController = void 0;
require("dotenv").config();
const stripe = require('stripe')(process.env.STRIPE_RIVATE_KEY);
class PaymentController {
    static checkout(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const session = yield stripe.checkout.sessions.create({
                    payment_method_types: ['card'],
                    line_items: [
                        {
                            price_data: {
                                currency: 'usd',
                                product_data: {
                                    name: 'Handbag',
                                },
                                unit_amount: 2000, // amount in cents
                            },
                            quantity: 1,
                        },
                    ],
                    mode: 'payment',
                    success_url: `http://localhost:3000/success?session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `http://localhost:3000/cancel`,
                });
                //res.json({ id: session.id });
                res.redirect(303, session.url);
            }
            catch (error) {
                res.status(500).json({ message: "Error in checkout",
                    error: error });
            }
        });
    }
    static getSecret(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const signingSecret = process.env.STRIPE_WEBHOOK_KEY;
            const sig = req.headers['stripe-signature'];
            let event;
            try {
                event = stripe.webhooks.constructEvent(req.body, sig, signingSecret);
            }
            catch (err) {
                res.status(400).send(`Webhook Error: ${err}`);
                return;
            }
            // Handle the event
            switch (event.type) {
                case 'payment_intent.succeeded':
                    const paymentIntentSucceeded = event.data.object;
                    // Then define and call a function to handle the event payment_intent.succeeded
                    break;
                // ... handle other event types
                default:
                    console.log(`Unhandled event type ${event.type}`);
            }
            console.log(event.data);
            // Return a 200 response to acknowledge receipt of the event
            res.json({ msg: 'success' });
        });
    }
}
exports.PaymentController = PaymentController;
