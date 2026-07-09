import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AXIOS_API from "../../api/api";

function ViewProduct() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await AXIOS_API.get(`/api/getstoredproducts/${id}`);

        console.log(response.data);

        setProduct(response.data);

      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");

      await AXIOS_API.post(
        "/cart/add",
        {
          productId: product._id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Added to cart");

    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  if (!product) {
    return (
      <h1 className="text-center mt-10 text-xl">
        Loading...
      </h1>
    );
  }

  return (
    <div>
      <h1 className="font-bold mt-10 text-center text-indigo-600 text-3xl">
        View Product
      </h1>

      <div className="border rounded-xl overflow-hidden shadow-lg max-w-lg mx-auto mt-10">

        <img
          src={product.image}
          alt={product.name}
          className="h-56 w-full object-contain"
        />

        <div className="p-5">

          <h2 className="text-xl font-semibold">
            {product.name}
          </h2>

          <p className="text-green-600 text-2xl font-bold mt-3">
            ${product.price}
          </p>

          <p className="text-blue-600 mt-3">
            Category: {product.category}
          </p>

          <p className="mt-3">
            ⭐ {product.rating}
          </p>

          <p className="text-gray-600 mt-4">
            {product.description}
          </p>

          <button
            onClick={handleAddToCart}
            className="w-full mt-6 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg"
          >
            🛒 Add to Cart
          </button>

        </div>

      </div>
    </div>
  );
}

export default ViewProduct;
