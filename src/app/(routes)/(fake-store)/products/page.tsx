import { Suspense } from "react";
import { ProductListServer, ProductListClient, ProductListSkeleton } from "@/features/products";

interface Props {
  searchParams: Promise<{ isClient: string }>;
}

export default async function Page({ searchParams }: Props) {
  const { isClient } = await searchParams;
  if (isClient === "true") return <ProductListClient />;
  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <ProductListServer />
    </Suspense>
  );
}
