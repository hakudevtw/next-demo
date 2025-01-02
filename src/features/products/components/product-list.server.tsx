import { getProducts } from "@/services/fake-store.service";
import { ProductList } from "./product-list";

interface Props {}

export const ProductListServer = async ({}: Props) => {
  const products = await getProducts();
  return <ProductList products={products} />;
};
