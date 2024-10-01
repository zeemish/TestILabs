
import mongoose from "mongoose";


export const dbConnect = () => {
    const uri = process.env.MONGOOSE_URI;

    if (!uri) {
        throw new Error('MONGOOSE_URI is not defined in the environment variables.');
    }

    const mongoDb = mongoose.connect(uri)
        .then(() => console.log("Db connected successfully."))
        .catch((err: any) => console.log({ error: err.message }));

    return mongoDb;
}