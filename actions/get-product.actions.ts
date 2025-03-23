"use server";

import { connectToDatabase } from "@/mongo";
import Product from "@/mongo/model/product.model";
import type { ProductResponseType } from "@/types/product";

export const getProducts = async (): Promise<ProductResponseType> => {
  const db = await connectToDatabase();

  try {
    const products = await Product.find();

    return {
      products: JSON.parse(JSON.stringify(products)),
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      products: null,
      error: "Error fetching products",
    };
  }
};
