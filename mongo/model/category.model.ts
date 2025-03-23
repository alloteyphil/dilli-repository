import { Schema, model, models, Document } from "mongoose";

interface ICategory extends Document {
  name: string;
  slug: string;
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    slug: { type: String, required: true, unique: true },
  },
  { timestamps: true },
);

const Category =
  models.Category || model<ICategory>("Category", categorySchema);

export default Category;
