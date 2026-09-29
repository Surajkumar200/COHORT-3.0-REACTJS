import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Cart = () => {
  // Assuming MyContext provides updateQuantity and removeFromCart helper functions
  const { addproduct, updateQuantity, removeFromCart } = useContext(MyContext);

  // Calculate subtotal, taking item quantity into account
  const subtotal = addproduct.reduce(
    (acc, item) => acc + (item.price || 0) * (item.quantity || 1),
    0,
  );
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  if (addproduct.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
        <div className="w-16 h-16 mb-4 text-gray-400 bg-gray-100 rounded-full flex items-center justify-center">
          🛒
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Your Cart is Empty</h2>
        <p className="mt-2 text-gray-500">
          Looks like you haven't added anything to your cart yet.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        Shopping Cart ({addproduct.length})
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items List */}
        <div className="lg:col-span-2 space-y-4">
          {addproduct.map((item, index) => {
            const quantity = item.quantity || 1;

            return (
              <div
                key={item.id || index}
                className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100 gap-4 transition hover:shadow-md"
              >
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src={item.images || "https://via.placeholder.com/150"}
                    alt={item.title || item.name}
                    className="w-20 h-20 object-contain rounded-lg bg-gray-50 p-2 border"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg line-clamp-1">
                      {item.title || item.name}
                    </h3>
                    {item.category && (
                      <span className="text-xs text-gray-400 capitalize">
                        {item.category}
                      </span>
                    )}
                    {item.rating && (
                      <div className="text-xs text-amber-500 mt-1">
                        ★ {item.rating?.rate || item.rating} (
                        {item.rating?.count || 0} reviews)
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto sm:justify-end gap-6">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden bg-gray-50">
                    <button
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 font-bold transition disabled:opacity-50"
                      onClick={() =>
                        updateQuantity
                          ? updateQuantity(item.id, quantity - 1)
                          : console.log("Decrease quantity", item.id)
                      }
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-3 py-1 text-sm font-semibold text-gray-800 bg-white border-x border-gray-200">
                      {quantity}
                    </span>
                    <button
                      className="px-3 py-1 text-gray-600 hover:bg-gray-200 font-bold transition"
                      onClick={() =>
                        updateQuantity
                          ? updateQuantity(item.id, quantity + 1)
                          : console.log("Increase quantity", item.id)
                      }
                    >
                      +
                    </button>
                  </div>

                  {/* Item Total Price */}
                  <span className="text-xl font-bold text-green-600 min-w-[80px] text-right">
                    ${(Number(item.price) * quantity).toFixed(2)}
                  </span>

                  <button
                    className="text-gray-400 hover:text-red-500 text-sm font-medium transition"
                    onClick={() =>
                      removeFromCart
                        ? removeFromCart(item.id)
                        : console.log("Remove item:", item.id)
                    }
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Order Summary Side Card */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit space-y-4">
          <h2 className="text-xl font-bold text-gray-900 border-b pb-3">
            Order Summary
          </h2>

          <div className="space-y-2 text-sm text-gray-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-gray-800">
                ${subtotal.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax (8%)</span>
              <span className="font-semibold text-gray-800">
                ${tax.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="text-green-600 font-semibold">Free</span>
            </div>
          </div>

          <hr className="my-2 border-gray-200" />

          <div className="flex justify-between text-lg font-bold text-gray-900">
            <span>Total</span>
            <span className="text-green-600">${total.toFixed(2)}</span>
          </div>

          <button className="w-full mt-4 bg-black text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
