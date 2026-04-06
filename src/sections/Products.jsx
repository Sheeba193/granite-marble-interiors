import { products } from "../constants";
import ProductCard from "../components/ProductCard";

export const Products = () => {
  return (
    <section className="px-6 py-16">

      <h2 className="text-3xl font-bold text-center">
        Our Premium Collection
      </h2>

      <div className="mt-10 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id || product.name} {...product} />
        ))}
      </div>
    </section>
  );
};



