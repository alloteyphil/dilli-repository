"use server";

import { connectToDatabase } from "@/mongo";
import Category from "@/mongo/model/category.model";
import type { CreateProductType } from "@/types/product";
import { products } from "@/data/product";
import Product from "@/mongo/model/product.model";
import type { BulkWriteResult } from "mongoose/node_modules/mongodb";

export const seedProducts = async (
  product: CreateProductType[],
): Promise<{
  products: BulkWriteResult | null;
  error: string | null;
}> => {
  try {
    const db = await connectToDatabase();

    const categories = await Category.find();

    const categoryMap = new Map<string, string>(
      categories.map((category) => [category.slug, category._id]),
    );

    const productData = products.map((product) => ({
      ...product,
      category: categoryMap.get(product.category),
    }));

    const operations = productData.map((product) => ({
      updateOne: {
        filter: { slug: product.slug },
        update: {
          $set: product,
        },
        upsert: true,
      },
    }));

    const productsResult = await Product.bulkWrite(operations);

    return {
      products: productsResult,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      products: null,
      error: "Error seeding products",
    };
  }
};
