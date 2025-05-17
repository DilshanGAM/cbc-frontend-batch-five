import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={"/overview/"+product.productId} className="w-[300px] h-[450px] bg-white shadow-lg rounded-lg m-4 overflow-hidden flex flex-col border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="h-[200px] w-full bg-gray-100 flex items-center justify-center">
        {product.images && product.images.length > 0 ? (
          <img
            src={product.images[0]}
            alt={product.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <span className="text-gray-400">No Image</span>
        )}
      </div>

      {/* Product Info */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
          <p className="text-sm text-gray-500 mt-1 h-[48px] overflow-hidden">
            {product.description}
          </p>
        </div>

        {/* Pricing */}
        <div className="mt-3">
          {product.labelledPrice !== product.price ? (
            <div className="flex items-center gap-2">
              <p className="text-red-500 font-bold text-lg">
                Rs. {product.price.toLocaleString()}
              </p>
              <p className="text-gray-400 line-through text-sm">
                Rs. {product.labelledPrice.toLocaleString()}
              </p>
            </div>
          ) : (
            <p className="text-gray-700 font-semibold text-lg">
              Rs. {product.price.toLocaleString()}
            </p>
          )}
        </div>

        {/* Stock & Button */}
        <div className="mt-4 flex items-center justify-between">
          <span
            className={`text-sm font-medium ${
              product.isAvailable && product.stock > 0
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {product.isAvailable && product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>

          <button
            disabled={!product.isAvailable || product.stock <= 0}
            className="px-3 py-1 text-sm rounded-md text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 transition"
          >
            {product.isAvailable && product.stock > 0 ? "Buy Now" : "Unavailable"}
          </button>
        </div>
      </div>
    </Link>
  );
}
