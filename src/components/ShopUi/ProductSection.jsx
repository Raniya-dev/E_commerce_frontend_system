import { useState } from "react";
import ProductCard from "./ProductCard"
import Searchbar from "./Searchbar";

function ProductSection() {

    const [searchTerm, setSearchTerm] = useState("")
    const [selectedCategory,setSelectedCategory]= useState("All")
    const [sortType,setSortType] = useState("")



    const products = [
        {
            id: 1,
            name: 'Cosmetics',
            price: 100,
            category: 'Category A',
            rating: 4.5,
            image: 'https://images.unsplash.com/photo-1583209814683-c023dd293cc6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvc21ldGljfGVufDB8fDB8fHww',
        },
        {
            id: 2,
            name: 'Ladies Top-wear',
            price: 200,
            category: 'Category B',
            rating: 4.0,
            image: 'https://plus.unsplash.com/premium_photo-1664202526559-e21e9c0fb46a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            id: 3,
            name: 'Unisex Shoes',
            price: 300,
            category: 'Category C',
            rating: 4.5,
            image: 'https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2hvZXN8ZW58MHx8MHx8fDA%3D',


        }, {
            id: 4,
            name: 'Lipstic',
            price: 500,
            category: 'Category D',
            rating: 4.0,
            image: 'https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlwc3RpY2t8ZW58MHx8MHx8fDA%3D',
        },
        {
            id: 5,
            name: 'Mens Overcoat',
            price: 760,
            category: 'Category E',
            rating: 4.3,
            image: 'https://images.unsplash.com/photo-1507680434567-5739c80be1ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFzaGlvbiUyMG1hbnxlbnwwfHwwfHx8MA%3D%3D',
        }, {
            id: 6,
            name: 'Home Interior Set',
            price: 900,
            category: 'Category F',
            rating: 5.0,
            image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGludGVyaW9yfGVufDB8fDB8fHww',
        }
    ];

    



    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((product)=>selectedCategory ==='All'? true : product.category === selectedCategory)

    .sort((a,b)=>{
        if(sortType === "priceLowHigh") return a.price - b.price
        if(sortType === "priceHighLow") return b.price - a.price
        if(sortType === "ratingHighLow") return b.rating - a.rating

    })


    return (
        <section className="py-16 px-8">
            <h2 className="text-2xl font-semibold text-center mb-8">Our Products</h2>

            <div className="flex justify-center mb-10">
                <Searchbar setSearchTerm={setSearchTerm} />

                <select
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className=" mx-5 p-3 border-2 text-indigo-900 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-center mb-8"
                >
                    <option value="All">All Categories</option>
                    <option value="Category A">Category A</option>
                    <option value="Category B">Category B</option>
                    <option value="Category C">Category C</option>
                    <option value="Category D">Category D</option>
                    <option value="Category E">Category E</option>
                    <option value="Category F">Category F</option>
                </select>





                <div className="flex justify-end mb-6">
                    <select
                        onChange={(e) => setSortType(e.target.value)}
                    className=" p-3 border-2 text-indigo-900 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-center mb-8"
                    >
                        <option value="">Sort By</option>
                        <option value="priceLowHigh">Price: Low → High</option>
                        <option value="priceHighLow">Price: High → Low</option>
                        <option value="ratingHighLow">Rating: High → Low</option>
                    </select>
                </div>
            </div>





            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 text-center">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                            category={product.category}
                            rating={product.rating}
                        />
                    ))
                ) : (
                    <p className="col-span-full text-center">No products found</p>
                )}
            </div>

        </section>
    )
}

export default ProductSection