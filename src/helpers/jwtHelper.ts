import { sign } from "jsonwebtoken"
import { configs, ConfigType } from "../configuration/config";
import { ObjectId } from "mongoose";

export class JwtService {

    constructor() { }
    static async signToken(id: ObjectId, role: string = "") {

        const expiresIn = '7d';
        const secret = configs()
        const userInfo = { user: id, role: role };
        // const token = sign(userInfo, secret, { expiresIn });
        const token = sign(userInfo, secret.jwt.secretOrKey, { expiresIn })
        return {
            expires_in: expiresIn,
            access_token: token,
        }
    }
}

// // const token = jwt.sign(
// //     {
// //         login_token: jsonToken,
// //         access: 'auth',
// //     },
// //     secret,
// //     { expiresIn: "24h" }
// // ).toString();