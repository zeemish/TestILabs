import { Request, Response } from "express"; // Import Request and Response
import { IUser } from "../schemas/User";
import { AuthService } from "../services/AuthService";

export class AuthController {
  static async registerAccount(req: Request, res: Response): Promise<Response> {
    try {
      const payload = req.body;
      console.log(payload);

      const data = await AuthService.createAccount(payload);

      return res.status(data?.statusCode).json({ ...data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error creating account",
        error: error,
      });
    }
  }
  static async login(req: Request, res: Response) {
    try {
      const payload = req.body;
      console.log({ payload });

      const data = await AuthService.login(payload);
      console.log(data);

      return res.status(data?.statusCode).json({ ...data });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Error to login",
        error: error,
      });
    }
  }
}
