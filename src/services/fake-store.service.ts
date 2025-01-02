import { FAKE_STORE } from "@/constants/endpoints";
import type { Product, Category } from "@/types/fake-store.type";

export async function getProducts({
  limit = 10,
  sort = "asc",
}: {
  limit?: number;
  sort?: "asc" | "desc";
} = {}) {
  try {
    const response = await fetch(`${FAKE_STORE.PRODUCTS}?limit=${limit}&_ort=${sort}`);
    const data = await response.json();
    return data as Product[];
  } catch (error) {}
}

export async function getProduct(id: number) {
  try {
    const response = await fetch(`${FAKE_STORE.PRODUCTS}/${id}`);
    const data = await response.json();
    return data as Product;
  } catch (error) {}
}

export async function getCategories() {
  try {
    const response = await fetch(FAKE_STORE.CATEGORIES);
    const data = await response.json();
    return data as Category[];
  } catch (error) {}
}

export async function getCategoryProducts(category: Category) {
  try {
    const response = await fetch(`${FAKE_STORE.CATEGORIES}/${category}`);
    const data = await response.json();
    return data as Product[];
  } catch (error) {}
}

export async function createProduct(product: Omit<Product, "id">) {
  try {
    const response = await fetch(FAKE_STORE.PRODUCTS, {
      method: "POST",
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data as Product;
  } catch (error) {}
}

export async function updateProduct(product: Product) {
  try {
    const response = await fetch(`${FAKE_STORE.PRODUCTS}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product),
    });
    const data = await response.json();
    return data as Product;
  } catch (error) {}
}

export async function deleteProduct(id: number) {
  try {
    const response = await fetch(`${FAKE_STORE.PRODUCTS}/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    return data as Product;
  } catch (error) {}
}
