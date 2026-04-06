const ProductCard = ({ imgURL, name, category, bestFor, small }) => {
  if (!imgURL || !name) return null;

  return (
    <div
      className={`glass rounded-2xl p-3 hover:glow-border transition-all duration-500 hover:scale-105 ${
        small ? "w-[200px]" : "w-full"
      }`}
    >
      {/* Image */}
      <div className={`${small ? "h-40" : "h-64"} overflow-hidden rounded-xl mb-3`}>
        <img
          src={imgURL}
          alt={name}
          className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Content */}
      <div className="px-1">
        <p className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
          {category || "Material"}
        </p>

        <h3 className={`${small ? "text-sm" : "text-lg"} font-semibold text-primary mt-1`}>
          {name}
        </h3>

        <p className={`${small ? "text-xs" : "text-sm"} text-muted-foreground mt-1`}>
          <span className="font-medium text-white">Best for:</span> {bestFor || "Premium interiors"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;