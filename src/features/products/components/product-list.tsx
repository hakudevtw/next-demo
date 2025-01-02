import { ProductCard, ProductCardSkeleton } from "./product-card";
import InfoWrapper from "@/components/info-wrapper";
import type { Product } from "@/services/fake-store.type";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  if (!products) return null;
  return (
    <InfoWrapper className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </InfoWrapper>
  );
};

export const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};
