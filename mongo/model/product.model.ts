import { Schema, model, models, Document, Types } from "mongoose";

interface IProduct extends Document {
  name: string;
  price: number;
  variants: string[];
  description: string;
  image: string;
  category: Types.ObjectId;
  slug: string;
  isActive: boolean;
}

const productSchema = new Schema<IProduct>(
  {
    name: String,
    price: Number,
    variants: [String],
    description: String,
    image: String,
    category: { type: Schema.Types.ObjectId, ref: "Category" },
    isActive: Boolean,
    slug: String,
  },
  { timestamps: true },
);

const Product = models.Product || model<IProduct>("Product", productSchema);

export default Product;
