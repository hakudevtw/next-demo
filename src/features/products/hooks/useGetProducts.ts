"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { getProducts } from "@/services/fake-store/rest-api";
import type { Product } from "@/services/fake-store/fake-store.type";
import type { GetProductsParams } from "@/services/fake-store/rest-api";

const LIMIT = 10;

export const useGetProducts = (initialData: Product[], params: GetProductsParams = {}) => {
  return useInfiniteQuery({
    queryKey: ["products"],
    queryFn: ({ pageParam }) => getProducts({ ...params, limit: LIMIT, offset: pageParam * LIMIT }),
    initialData: { pages: [initialData], pageParams: [0] },
    initialPageParam: 0,
    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
};
