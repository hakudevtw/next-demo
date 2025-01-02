import { REST_ENDPOINTS } from "./constants";
import type {
  Product,
  NewProduct,
  UpdatedProduct,
  Category,
  NewCategory,
} from "@/services/fake-store/fake-store.type";
import { toStringValues } from "@/utils/type-transform";

interface GetProductsParams {
  limit?: number;
  offset?: number;
  title?: string;
  price?: number;
  price_min?: number;
  price_max?: number;
  categoryId?: number;
}

export async function getProducts(config: GetProductsParams = {}) {
  const searchParams = new URLSearchParams(toStringValues(config)).toString();

  try {
    const response = await fetch(`${REST_ENDPOINTS.PRODUCTS}?${searchParams}`);
    const data = await response.json();
    return data as Product[];
  } catch (error) {
    return [];
  }
}

export async function getProduct(id: Product["id"]) {
  try {
    const response = await fetch(`${REST_ENDPOINTS.PRODUCTS}/${id}`);
    const data = await response.json();
    return data as Product;
  } catch (error) {
    return null;
  }
}

export async function createProduct(product: NewProduct) {
  try {
    const response = await fetch(REST_ENDPOINTS.PRODUCTS, {
      method: "POST",
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data as Product;
  } catch (error) {
    return null;
  }
}

export async function updateProduct(product: UpdatedProduct) {
  try {
    const response = await fetch(`${REST_ENDPOINTS.PRODUCTS}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data as Product;
  } catch (error) {
    return null;
  }
}

export async function deleteProduct(id: Product["id"]) {
  try {
    const response = await fetch(`${REST_ENDPOINTS.PRODUCTS}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data as Product;
  } catch (error) {
    return null;
  }
}

export async function getCategories() {
  try {
    const response = await fetch(REST_ENDPOINTS.CATEGORIES);
    const data = await response.json();
    return data as Category[];
  } catch (error) {
    return [];
  }
}

export async function getCategory(id: Category["id"]) {
  try {
    const response = await fetch(`${REST_ENDPOINTS.CATEGORIES}/${id}`);
    const data = await response.json();
    return data as Category;
  } catch (error) {
    return null;
  }
}

export async function createCategory(category: NewCategory) {
  try {
    const response = await fetch(REST_ENDPOINTS.CATEGORIES, {
      method: "POST",
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return data as Category;
  } catch (error) {
    return null;
  }
}

export async function updateCategory(category: Category) {
  try {
    const response = await fetch(`${REST_ENDPOINTS.CATEGORIES}/${category.id}`, {
      method: "PUT",
      body: JSON.stringify(category),
    });
    const data = await response.json();
    return data as Category;
  } catch (error) {
    return null;
  }
}

export async function deleteCategory(id: Category["id"]) {
  try {
    const response = await fetch(`${REST_ENDPOINTS.CATEGORIES}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data as Category;
  } catch (error) {
    return null;
  }
}

export async function getCategoryProducts(id: Category["id"]) {
  try {
    const response = await fetch(`${REST_ENDPOINTS.CATEGORIES}/${id}/products`);
    const data = await response.json();
    return data as Product[];
  } catch (error) {
    return [];
  }
}
