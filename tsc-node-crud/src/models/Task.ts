import { Schema, model, Document } from "mongoose";

export interface Task extends Document {
  title: string;
  description: string;
}

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      lowercase: true,
    },
    description: {
      type: String,
      required: true,
      lowercase: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export default model<Task>("Task", taskSchema);
