import { fetchProducts } from "@/actions/fetchProducts";
import ProductList from "@/components/features/product/ProductList";

export default async function Home() {
  const products = await fetchProducts();

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <ProductList products={products.data} />
    </div>
  );
}
