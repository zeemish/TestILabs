import { JwtService } from "../helpers/jwtHelper";
import { ComparePassword } from "../helpers/passwordHelper";
import { successResponse } from "../middlewares/AppSuccess";
import { IUser } from "../schemas/User";
import { UserService } from "./UserService.";

export class AuthService {


    static async createAccount(body: IUser) {

        console.log(body);
        const { status, statusCode, data, message } = await UserService.createUser(body);
        if (!status) return { statusCode, message }
        const token = (await JwtService.signToken(data._id, data?.role)).access_token
        return successResponse({ token, user: data }, message, statusCode);
    }


    static async login(body: IUser) {
        const { email, password } = body
        const user = await UserService.findUser(email);
        if (!user) return { statusCode: 404, message: "User not found" }

        const isValidPass = await ComparePassword(password, user?.password);

        if (!isValidPass)
            return { statusCode: 400, message: "Incorrect password." }

        const token = (await JwtService.signToken(user?._id)).access_token;

        return successResponse({ token, user }, "Login successfully", 200)

    }

}