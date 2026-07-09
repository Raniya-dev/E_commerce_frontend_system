import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Searchbar from "./Searchbar";
import AXIOS_API from "../../api/api";

function ProductSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortType, setSortType] = useState("");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch products from your backend
        const response = await AXIOS_API.get("/api/getstoredproducts");

        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products
    .filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((product) =>
      selectedCategory === "All"
        ? true
        : product.category === selectedCategory
    )
    .sort((a, b) => {
      if (sortType === "priceLowHigh") return a.price - b.price;
      if (sortType === "priceHighLow") return b.price - a.price;
      if (sortType === "ratingHighLow") return b.rating - a.rating;
      return 0;
    });

  return (
    <section className="py-16 px-8">
      <h2 className="text-2xl font-semibold text-center mb-8">
        Our Products
      </h2>

      <div className="flex justify-center mb-10 flex-wrap gap-4">
        <Searchbar setSearchTerm={setSearchTerm} />

        <select
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 border-2 text-indigo-900 border-gray-200 rounded-lg shadow-sm"
        >
          <option value="All">All Categories</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </select>

        <select
          onChange={(e) => setSortType(e.target.value)}
          className="p-3 border-2 text-indigo-900 border-gray-200 rounded-lg shadow-sm"
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low → High</option>
          <option value="priceHighLow">Price: High → Low</option>
          <option value="ratingHighLow">Rating: High → Low</option>
        </select>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
        {filteredProducts.length > 0 ? (
            
          filteredProducts.map((product) => (
            <ProductCard
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
              rating={product.rating}
            />
          ))
        ) : (
          <p className="col-span-full text-center">
            No products found
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductSection;