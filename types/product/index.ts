export interface ProductResponseType {
  products: Product | Product[] | null;
  error: string | null;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  variants: string[];
  category: string;
  isActive: boolean;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductType {
  name: string;
  description: string;
  price: number;
  image: string;
  variants: string[];
  category: string;
  isActive: boolean;
  slug: string;
}
