import { Suspense } from "react";
import { ProductList } from "@/features/products";

export default async function Page() {
  return (
    <>
      <Suspense fallback="Loading products...">
        <ProductList />
      </Suspense>
    </>
  );
}
