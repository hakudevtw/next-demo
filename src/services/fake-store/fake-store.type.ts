// Products
export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
}

export type NewProduct = Omit<Product, "id" | "category"> & {
  categoryId: Category["id"];
};

export type UpdatedProduct = Omit<Product, "category"> & {
  categoryId: Category["id"];
};

// Categories
export interface Category {
  id: number;
  name: string;
  image: string;
}

export type NewCategory = Omit<Category, "id">;
