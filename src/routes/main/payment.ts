import { Router } from 'express';
import  * as bodyParser from 'body-parser' 
import { PaymentController } from '../../controllers/paymentController';


const router = Router();

router.post("/create-checkout-session",  PaymentController.checkout);

router.post("/hooks", bodyParser.raw({type: 'application/json'}),  PaymentController.getSecret);


export default router;
