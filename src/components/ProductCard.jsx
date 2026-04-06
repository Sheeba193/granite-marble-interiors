const ProductCard = ({ imgURL, name, category, bestFor }) => {
  if (!imgURL || !name) return null;

  return (
    <div className="glass rounded-3xl p-4 hover:glow-border transition-all duration-300">

      {/* Image */}
      <div className="overflow-hidden rounded-2xl mb-4">
        <img
          src={imgURL}
          alt={name}
          className="w-full h-72 object-cover rounded-2xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="px-1">
        {/* Category */}
        <p className="text-sm font-medium tracking-wider uppercase text-muted-foreground">
          {category || "Material"}
        </p>

        {/* Name */}
        <h3 className="text-xl font-semibold text-primary mt-1">
          {name}
        </h3>

        {/* Best For */}
        <p className="text-sm text-muted-foreground mt-2">
          <span className="font-medium text-white">Best for:</span>{" "}
          {bestFor || "Premium interiors"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;