"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useCartStore } from "@/store/useCartStore";
import { IProduct } from "@/types/product";
import Link from "next/link";
import React from "react";

function ProductCard({ product }: { product: IProduct }) {
  const setCartItems = useCartStore((state) => state.setCartItems);
  const cartItems = useCartStore((state) => state.cartItems);
  const increase = useCartStore((state) => state.increase);
  return (
    <Card
      key={product.id}
      className="relative overflow-hidden"
      onClick={() => {
        /**
         * Setting product to cart and increase the cart count
         * here duplicate check is also conditioned
         */
        increase();
        if (cartItems.some((item) => item.id === product.id)) {
          return;
        } else {
          setCartItems([...cartItems, product]);
        }
      }}
    >
      <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
        <span className="sr-only">View {product.name}</span>
      </Link>
      <img
        src={product.image}
        alt={product.name}
        width={400}
        height={400}
        className="w-full h-60 object-cover"
        style={{ aspectRatio: "400/400", objectFit: "cover" }}
      />
      <CardContent className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-sm text-muted-foreground mb-4">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold">${product.price}</span>
          <Button
            size="sm"
            onClick={() => {
              increase();
              setCartItems([...cartItems, product]);
            }}
            disabled={cartItems.some((item) => item.id === product.id)}
          >
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProductCard;
