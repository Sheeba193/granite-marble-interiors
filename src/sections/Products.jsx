import { products } from "../constants";
import ProductCard from "../components/ProductCard";

export const Products = () => {
  return (
    <section id="products" className="px-6 py-16">

      {/* Section Header */}
      <div className="max-w-3xl mb-16 text-center mx-auto">
        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
          What We Sell
        </span>
        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
          Products{" "}
          <span className="font-serif italic font-normal text-white">
            that elevate your interiors.
          </span>
        </h2>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          Explore our curated selection of premium granite and marble products.
        </p>
        <p className="text-muted-foreground animate-fade-in animation-delay-200">
          Each product has a different price, please contact us for more details.
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hidden">
        {products.map((product, idx) => (
          <div
            key={product.id || product.name}
            className="min-w-[200px] flex-shrink-0 snap-start animate-slide-in"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <ProductCard {...product} small />
          </div>
        ))}
      </div>
    </section>
  );
};