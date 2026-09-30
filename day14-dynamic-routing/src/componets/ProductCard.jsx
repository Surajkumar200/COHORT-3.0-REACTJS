import React from "react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
 let navigate = useNavigate()
  const { title, price, description, category, image, rating } = product;

  const handleAddToCart = () => {
    // Add your cart logic or state update here
    console.log("Added to cart:", product.id);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex flex-col justify-between h-full shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200">
      <div onClick={() => navigate(`/detail/${product.id}`)}>
        {/* Product Image */}
        <div className="w-full h-48 bg-gray-50 rounded-lg p-4 mb-4 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="max-h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Category */}
        <span className="text-xs font-semibold text-blue-600 capitalize tracking-wide block mb-1">
          {category}
        </span>

        {/* Title */}
        <h2
          className="text-base font-semibold text-gray-900 line-clamp-1 mb-2"
          title={title}
        >
          {title}
        </h2>

        {/* Description */}
        <p className="text-xs text-gray-500 line-clamp-2 mb-4 leading-relaxed">
          {description}
        </p>
      </div>

      <div>
        {/* Rating & Price */}
        <div className="flex items-center justify-between mb-3 pt-3 border-t border-gray-100">
          <div className="flex items-center text-xs text-amber-500 font-medium">
            ★ <span className="ml-1 text-gray-800">{rating?.rate}</span>
            <span className="ml-1 text-gray-400 font-normal">
              ({rating?.count} Reviews)
            </span>
          </div>
          <span className="text-lg font-bold text-gray-900">
            ${price?.toFixed(2)}
          </span>
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-medium py-2.5 px-4 rounded-lg text-sm transition-colors duration-200 shadow-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
