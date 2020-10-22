import { model, Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
}

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      min: 4,
      lowercase: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<IUser>("User", userSchema);
