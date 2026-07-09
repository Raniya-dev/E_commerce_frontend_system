import { useEffect, useState } from "react";
import API from "../../api/api";

export default function CartUI() {
  const [cartItems, setCartItems] = useState([]);

  const fetchCart = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await API.get("/cart", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setCartItems(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleRemove = async (cartId) => {
    try {
      const token = localStorage.getItem("token");

      await API.delete(`/cart/${cartId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchCart();
    } catch (err) {
      console.log(err);
    }
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            🛒 Shopping Cart
          </h1>

          <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-semibold">
            {cartItems.length} Items
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
              alt="Empty Cart"
              className="w-36 mx-auto mb-6"
            />

            <h2 className="text-3xl font-bold text-gray-700">
              Your Cart is Empty
            </h2>

            <p className="text-gray-500 mt-3">
              Looks like you haven't added anything yet.
            </p>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cartItems.map((item) => (
                <div
                  key={item._id}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />

                  <h2 className="text-lg font-bold text-gray-800 mb-2">
                    {item.product.name}
                  </h2>

                  <p className="text-green-600 font-semibold mb-2">
                    ${item.product.price}
                  </p>

                  <p className="text-gray-600 mb-4">
                    Quantity: {item.quantity}
                  </p>

                  <button
                    onClick={() => handleRemove(item._id)}
                    className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold transition"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="mt-10 bg-white rounded-3xl shadow-xl p-8 flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">
                  Order Summary
                </h2>

                <p className="text-gray-500 mt-2">
                  Total Items: {cartItems.length}
                </p>
              </div>

              <div className="text-center">
                <p className="text-gray-500">Total Price</p>

                <h3 className="text-4xl font-bold text-green-600">
                  ${totalPrice.toFixed(2)}
                </h3>

                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}