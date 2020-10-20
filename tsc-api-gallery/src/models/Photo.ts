import { Schema, model, Document } from "mongoose";

const photoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imagePath: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);
//regullarmente al nombre de la interfaz se le coloca I al principio
interface IPhoto extends Document {
  title: string;
  description: string;
  imagePath: string;
}

export default model<IPhoto>("Photo", photoSchema);
