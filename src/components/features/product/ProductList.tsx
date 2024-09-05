"use client";

import { useState, useMemo, useEffect } from "react";
import Category from "./Category";
import Ratings from "./Ratings";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/actions/fetchProducts";
import { IProduct } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";

export default function ProductList({ products }: { products: IProduct[] }) {
  //   const [products, setProducts] = useState<IProduct[]>();
  const [selectedCategory, setSelectedCategory] = useState<any>([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const cartItems = useCartStore((state) => state.cartItems);

  console.log(cartItems);
  const filteredProducts = useMemo(() => {
    return products?.filter((product) => {
      console.log(product.rating, selectedRating);
      return (
        (selectedCategory.length === 0 ||
          selectedCategory.includes(product.category)) &&
        product.rating >= selectedRating
      );
    });
  }, [selectedCategory, selectedRating, products]);

  const includeCategory = (name: string) => {
    if (selectedCategory.includes(name)) {
      const filteredCategoryList = selectedCategory.filter(
        (category: string) => category !== name
      );
      setSelectedCategory(filteredCategoryList);
    } else {
      setSelectedCategory([...selectedCategory, name]);
    }
  };

  const includeRating = (rating: number) => {
    setSelectedRating(rating);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8 p-6">
      <div className="bg-background rounded-lg shadow-sm p-6">
        <h3 className="text-lg font-semibold mb-4">Filters</h3>
        <div className="space-y-4">
          <Category
            selectedCategory={selectedCategory}
            includeCategory={includeCategory}
          />

          <Ratings
            includeRating={includeRating}
            selectedRating={selectedRating}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts?.map((product) => (
          <ProductCard product={product} />
        ))}
      </div>
    </div>
  );
}
