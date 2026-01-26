function ProductCard({ name, price, category, rating, image }) {
    return (
        <div className="border rounded-[12px] overflow-hidden transition shadow-md hover:shadow-lg">
            <img src={image} alt={name} className="h-52 w-full object-cover" />
            <div className="p-4" >
                <h2 className="text-lg font-medium text-center" >{name}</h2>
                <p className="text-indigo-900 text-md font-bold mt-3" >Price : ${price}</p>
                <p className="text-blue-700 text-md mt-3" >Category : {category}</p>
                <p className="text-sm mt-3" >{rating}⭐</p>

            </div>
            <button
                onClick={() => {
                    console.log("product name is",name);
                    alert("product name: " + name)

                }}
                className="mt-4 mb-8 px-4 py-2 text-sm-border rounded-lg hover:bg-indigo-500 hover:text-white transition "> 🛒 Add to Cart</button>
        </div>
    )
}

export default ProductCard