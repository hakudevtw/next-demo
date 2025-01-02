"use client";

import { Fragment, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { ProductCard, ProductCardSkeleton } from "./product-card";
import { useGetProducts } from "../hooks/useGetProducts";
import type { Product } from "@/services/fake-store/fake-store.type";

interface Props {
  products: Product[];
}

export const ProductList = ({ products }: Props) => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } = useGetProducts(products);

  useEffect(() => {
    if (inView) fetchNextPage();
  }, [inView]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {data?.pages.map((group, i) => (
          <Fragment key={i}>
            {group?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Fragment>
        ))}
        {isFetchingNextPage &&
          hasNextPage &&
          [...Array(4)].map((_, index) => <ProductCardSkeleton key={index} />)}
      </div>
      <div ref={ref} />
    </>
  );
};

export const ProductListSkeleton = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {[...Array(8)].map((_, index) => (
        <ProductCardSkeleton key={index} />
      ))}
    </div>
  );
};
