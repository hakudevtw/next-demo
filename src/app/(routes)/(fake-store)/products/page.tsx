import { Suspense } from "react";
import { ProductListServer, ProductListClient, ProductListSkeleton } from "@/features/products";

interface Props {
  searchParams: Promise<{ environment: "client" | "server" }>;
}

export default async function Page({ searchParams }: Props) {
  const { environment } = await searchParams;
  const isClient = environment === "client";

  if (isClient) return <ProductListClient />;
  return (
    <Suspense fallback={<ProductListSkeleton />}>
      <ProductListServer />
    </Suspense>
  );
}
