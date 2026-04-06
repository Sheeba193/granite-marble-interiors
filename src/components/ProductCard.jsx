const ProductCard = ({ imgURL, name, category, bestFor }) => {
  if (!imgURL || !name) return null; // prevents crash

  return (
    <div className="flex flex-col bg-white rounded-xl shadow-md overflow-hidden">

      <img
        src={imgURL}
        alt={name}
        className="w-full h-64 object-cover"
      />

      <div className="p-4">
        <p className="text-sm text-yellow-600 font-semibold">
          {category || "Material"}
        </p>

        <h3 className="text-lg font-bold">
          {name}
        </h3>

        <p className="text-sm text-gray-600">
          <span className="font-semibold">Best for:</span>{" "}
          {bestFor || "Premium interiors"}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;