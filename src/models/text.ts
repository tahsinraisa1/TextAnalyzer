import mongoose, { Schema, Document } from "mongoose";

interface IText extends Document {
  data: string;
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

const textSchema = new Schema<IText>({
  data: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default mongoose.model<IText>("Text", textSchema);
