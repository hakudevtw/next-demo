"use client";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/fake-store.service";
import { ProductList, ProductListSkeleton } from "./product-list";

export const ProductListClient = () => {
  const {
    data: products,
    isLoading,
    isError,
    isPending,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isError) return <div>Something went wrong...</div>;
  if (isPending) return <ProductListSkeleton />;
  return <ProductList products={products} />;
};
