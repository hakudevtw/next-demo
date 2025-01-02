import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import type { Product } from "@/services/fake-store.type";

interface Props {
  product: Product;
}

export const ProductCard = ({ product }: Props) => {
  const { title, price, image } = product;
  return (
    <Card>
      <CardHeader>
        <CardTitle className="truncate">{title}</CardTitle>
        <CardDescription>${price.toFixed(2)}</CardDescription>
      </CardHeader>
      <CardContent className="h-48">
        <img src={image} alt={title} className="h-full w-full object-cover rounded" />
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <Button asChild>
          <Link href={`/products/${product.id}`}>View</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};
