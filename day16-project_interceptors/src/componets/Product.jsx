import React, { useState } from "react";

const Product = ({ product }) => {
  
    
  if (!product) return null;

  return (
    <div className="max-w-sm rounded-2xl overflow-auto shadow-lg bg-white border border-gray-100 flex flex-col hover:shadow-xl transition-shadow duration-300">
      {/* Product Image Container */}
      <div className="relative w-full h-64 bg-gray-50 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-gray-900/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-full capitalize">
          {product.category}
        </span>
      </div>

      {/* Product Content */}
      <div className="p-5 flex flex-col flex-grow justify-between">
        <div>
          {/* Title */}
          <h2
            className="text-lg font-bold text-gray-800 line-clamp-1 hover:line-clamp-none title-font"
            title={product.title}
          >
            {product.title}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mt-2">
            <div className="flex items-center bg-amber-100 text-amber-800 text-xs font-semibold px-2 py-0.5 rounded">
              <svg
                className="w-3.5 h-3.5 fill-current text-amber-500 mr-1"
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
              </svg>
              {product.rating?.rate}
            </div>
            <span className="text-xs text-gray-500">
              ({product.rating?.count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 text-sm mt-3 line-clamp-2">
            {product.description}
          </p>
        </div>

        {/* Footer: Price & Action */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400 block">Price</span>
            <span className="text-2xl font-bold text-gray-900">
              ${product.price?.toFixed(2)}
            </span>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-medium text-sm px-4 py-2.5 rounded-xl transition-colors duration-200 shadow-md shadow-indigo-200">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
