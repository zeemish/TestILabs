import { Document, model, ObjectId, Schema } from "mongoose";

export interface IUser extends Document {
  _id: ObjectId;
  name: string;
  email: string;
  password: string;
  age?: number;
  role?: string;
  wallet?: string;
  currency?: string;
  country?: string;
  city?: string;
  describe?: string;
  createdAt: Date;
}

const UserSchema = new Schema<IUser>(
  {
    name: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "customer",
    },
    wallet: {
      type: String,
      default: 0,
    },
    currency: {
      type: String,
      default: "EUR",
    },
    city: {
      type: String,
    },
    describe: {
      type: String,
    },
  },
  {
    timestamps: true,
    toJSON: {
      getters: true,
    },
    toObject: {
      getters: true,
    },
  }
);

class User {}

export const UserModel = model<IUser>("User", UserSchema);
