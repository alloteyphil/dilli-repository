export interface CreateCategoryType {
  name: string;
  slug: string;
}

export interface CategoryResponseType {
  category: CategoryType | null;
  error: string | null;
}

export interface CategoryType {
  _id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}
