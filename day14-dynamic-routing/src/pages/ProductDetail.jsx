import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const [singleProductDetails, setSingleProductDetails] = useState(null);

  const getProductDetails = async () => {
    try {
      let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
      setSingleProductDetails(res.data);
    } catch (error) {
      console.log("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const handleAddToCart = () => {
    console.log("Added to cart:", singleProductDetails.id);
  };

  // Show a clean loading state while fetching data
  if (!singleProductDetails) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500 font-medium">Loading product details...</p>
      </div>
    );
  }

  const { title, price, description, category, image, rating } =
    singleProductDetails;

  return (
    <div className="min-h-screen bg-gray-50 p-6 md:p-12 flex items-center justify-center">
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 max-w-4xl w-full shadow-sm grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Side: Product Image */}
        <div className="w-full h-80 bg-gray-50 rounded-xl p-6 flex items-center justify-center overflow-hidden">
          <img
            src={image}
            alt={title}
            className="max-h-full object-contain hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="flex flex-col justify-between h-full">
          <div>
            {/* Category */}
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider block mb-2">
              {category}
            </span>

            {/* Title */}
            <h1 className="text-2xl font-bold text-gray-900 mb-3">{title}</h1>

            {/* Rating */}
            {rating && (
              <div className="flex items-center text-sm font-medium text-amber-500 mb-4">
                ★{" "}
                <span className="ml-1 text-gray-800 font-semibold">
                  {rating.rate}
                </span>
                <span className="ml-1 text-gray-400 font-normal">
                  ({rating.count} reviews)
                </span>
              </div>
            )}

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {description}
            </p>
          </div>

          {/* Price and Add to Cart Section */}
          <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs text-gray-400 block uppercase">
                Price
              </span>
              <span className="text-3xl font-bold text-gray-900">
                ${price?.toFixed(2)}
              </span>
            </div>

            <button
              onClick={handleAddToCart}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold py-3 px-8 rounded-xl transition-colors duration-200 shadow-sm"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
