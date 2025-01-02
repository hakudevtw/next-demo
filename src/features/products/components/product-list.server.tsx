import { getProducts } from "@/services/fake-store.service";
import { ProductList } from "./product-list";

export const ProductListServer = async () => {
  const products = await getProducts();
  return <ProductList products={products} />;
};
