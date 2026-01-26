function Navbar(){
function handleClick(){
    alert("yes you hav clickced...")
}

    return(
        <nav className="sticky top-0 bg-indigo-50 border-b border-indigo-100">
           <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

            <h1 className="text-xl font-semibold text-indigo-600">ShopUI</h1>
            <ul className="hidden md:flex gap-8 text-sm">
                <li className="hover:text-indigo-600 cursor-pointer transition" >Home</li>
                <li className="hover:text-indigo-600 cursor-pointer transition"> Products</li>
                <li className="hover:text-indigo-600 cursor-pointer transition">Contact</li>
            </ul>
            <div className="flex items-center gap-3" >
                <button 
                onClick={handleClick}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Login</button>
                <button
                onClick={()=>{alert("you have clicked signup function..")}}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-indigo-600 transition">Signup</button>
            </div>
           </div>
           

        </nav>
    )
}

export default Navbar