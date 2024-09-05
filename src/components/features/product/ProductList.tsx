"use client";

import { useState, useMemo, useEffect } from "react";
import Category from "./Category";
import Ratings from "./Ratings";
import ProductCard from "./ProductCard";
import { fetchProducts } from "@/actions/fetchProducts";
import { IProduct } from "@/types/product";
import { useCartStore } from "@/store/useCartStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProductList({ products }: { products: IProduct[] }) {
  //   const [products, setProducts] = useState<IProduct[]>();
  const [selectedCategory, setSelectedCategory] = useState<any>([]);
  const [selectedRating, setSelectedRating] = useState(0);
  const cartItems = useCartStore((state) => state.cartItems);
  const [sortValue, setSortValue] = useState("price_low_to_high");
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
  }, [selectedCategory, selectedRating, products, sortValue]);

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
  const handleSort = (value: string) => {
    // console.log(value);
    setSortValue(value);
  };

  useEffect(() => {
    console.log(sortValue);
  }, [sortValue]);
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

      <div>
        <div className="mb-10">
          <Select onValueChange={handleSort} defaultValue={sortValue}>
            <SelectTrigger>
              <SelectValue placeholder="Sort" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="price_low_to_high">
                Price Low to High
              </SelectItem>
              <SelectItem value="price_high_to_low">
                Price High to Low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortValue === "price_low_to_high"
            ? filteredProducts
                .sort((a, b) => a.price - b.price)
                .map((product) => <ProductCard product={product} />)
            : filteredProducts
                .sort((a, b) => b.price - a.price)
                .map((product) => <ProductCard product={product} />)}
        </div>
      </div>
    </div>
  );
}
