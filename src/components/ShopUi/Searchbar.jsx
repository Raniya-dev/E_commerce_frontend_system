

function Searchbar({ setSearchTerm }) {

  

    return (
        <div className="w-full max-w-md ">
            <input className="w-full p-3 border-2 text-indigo-900 border-gray-200 rounded-lg shadow-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all duration-200 text-center mb-8" type="text" placeholder="Search by Product Name" onChange={(e) => setSearchTerm(e.target.value)} />

        </div>
    )
}

export default Searchbar