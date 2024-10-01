import { CreateHash } from "../helpers/passwordHelper";
import { IUser, UserModel } from "../schemas/User";

export class UserService {

    static async createUser(body: IUser) {
        const isEmailExist = await UserModel.findOne({ email: body.email });
        if (isEmailExist) return { statusCode: 400, message: "Email already exist." }
        if (body.password) body.password = await CreateHash(body.password)
        const user = await UserModel.create(body);
        if (!user) return { statusCode: 404, message: "Something went wrong " }
        return { status: true, statusCode: 200, data: user, message: "Account created successfully." }
    }
    static async findUser(email: string) {
        const user = await UserModel.findOne({ email })
        return user
    }
}