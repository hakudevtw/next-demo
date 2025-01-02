import { ProductList } from "./product-list";
import { getProducts } from "@/services/fake-store/rest-api";

export const ProductListWrapper = async () => {
  const products = await getProducts({
    limit: 10,
    offset: 0,
  });

  return <ProductList products={products} />;
};
