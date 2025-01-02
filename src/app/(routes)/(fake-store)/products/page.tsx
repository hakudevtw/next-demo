import { Suspense } from "react";
import { ProductList, ProductListSkeleton } from "@/features/products";

export default async function Page() {
  return (
    <>
      <Suspense fallback={<ProductListSkeleton />}>
        <ProductList />
      </Suspense>
    </>
  );
}
