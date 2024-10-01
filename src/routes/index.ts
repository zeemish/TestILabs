import { Router } from 'express';
import authRoute from "./main/auth"
import paymentRoute from "./main/payment"
const router = Router();

router.use("/auth", authRoute)
router.use("/payment", paymentRoute)


export default router