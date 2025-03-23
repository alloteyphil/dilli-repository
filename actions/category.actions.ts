"use server";

import { connectToDatabase } from "@/mongo";
import Category from "@/mongo/model/category.model";
import type {
  CategoryResponseType,
  CreateCategoryType,
} from "@/types/category";

export const createCategory = async (
  category: CreateCategoryType,
): Promise<CategoryResponseType> => {
  if (!category) {
    return { category: null, error: "Category is required" };
  }

  try {
    const db = await connectToDatabase();

    const existingCategory = await Category.findOne({
      slug: category.slug,
    });

    if (existingCategory) {
      return { category: null, error: "Category already exists" };
    }

    const newCategory = await Category.create(category);

    return { category: JSON.parse(JSON.stringify(newCategory)), error: null };
  } catch (error) {
    return { category: null, error: "Failed to create category" };
  }
};
