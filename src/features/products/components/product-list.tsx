import { ProductCard } from "./product-card";
import { getProducts } from "@/services/fake-store.service";

interface Props {}

export const ProductList = async ({}: Props) => {
  const products = await getProducts();

  if (!products) return null;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};
