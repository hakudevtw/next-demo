import { Suspense } from "react";
import { getProducts } from "@/services/fake-store.service";
import { ProductList, ProductListSkeleton } from "@/features/products";

export default async function Page() {
  const products = await getProducts();

  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <ProductList products={products} />
    </Suspense>
  );
}
