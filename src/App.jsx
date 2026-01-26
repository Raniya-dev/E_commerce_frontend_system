import "./index.css"
import Navbar from "./components/ShopUi/Navbar"
import Card from "./components/Card"
import ProductSection from "./components/ShopUi/ProductSection"
import { useState } from "react";



function App() {

//   const products = [
//   {
//     id: 1,
//     name: 'Product Name 1',
//     price: 100,
//     category: 'Category A',
//     rating: 4.5,
//     image: 'https://via.placeholder.com/150',
//   },
//   {
//     id: 2,
//     name: 'Product Name 2',
//     price: 200,
//     category: 'Category B',
//     rating: 4.0,
//     image: 'https://via.placeholder.com/150',
//   },
//   // Add more products...
//   {
//     id:3,
//     name:'Product Name 3',
//     price:300,
//     category:'Category C',
//     rating: 4.5,
//     image:

//   }
// ];


  // let fruits = ["Apple","Banana","berry","Orange"]
  // const tasks = [
  //   { id: 1, name: "Learn React", completed: true },
  //   { id: 2, name: "Build Project", completed: false },
  //   { id: 3, name: "Submit Assignment", completed: true }
  // ];

  // const [items, setitems] = useState([
  //   { id: 1, name: "Laptop", inStock: true },
  //   { id: 2, name: "Mouse", inStock: false },
  //   { id: 3, name: "Monitor", inStock: true }]
  // )


  // const [name, setname] = useState("john")

  // const [count, setCount] = useState(0)

  // const [firstname, setFirstname] = useState("")
  // let p = document.querySelector("#text")

  // function handleChange(event) {

  //   let a = event.target.value;
  //   a.textContent = p
  //   // console.log("first input: ",event.target.value);
  // }

  return (
    <div>
      <Navbar />
      <ProductSection />

      {/* <h1>count:{count}</h1>
      <button className="bg-slate-500 text-white rounded-md p-3" onClick={() => setCount(count + 1)} >Increament</button>
      <button className="bg-slate-500 text-white rounded-md p-3" onClick={() => setCount(count - 1)} >Decreament</button> */}

      {/* <h1>Name:{name}</h1>
      <button  className="bg-slate-500 text-white rounded-md p-3" onClick={()=>setname("athulya")} >Change Name</button> */}


{/* 
      <div className="container text-center  justify-center flex flex-col items-center" >
        <h1 className="mt-3">List of Task</h1>
        {
          tasks.map((task, ind) => (
            <div key={ind} className="bg-[#905ab6] text-white my-2 w-40 p-4 list-none ">
              <li key={task.id}>{task.name} {task.completed ? "✅" : "❌"}</li>
            </div>
          ))
        }
      </div> */}

{/* 
      <div className="container text-center  justify-center flex flex-col items-center" >
        <h1>Products List</h1>
        {
          items.map((item, ind) => (
            <div key={ind} className="bg-slate-500 text-white my-2 w-40 p-4 list-none" >
              <li key={item.id} > {item.name} {item.inStock ? "InStock✅" : "OutOfStock❌"}</li>
            </div>
          ))
        }
      </div> */}
      

      {/* <label htmlFor="">First Name:</label>
      <input onChange={(event) => { setFirstname(event.target.value)
      }} type="text" className="border border-gray-600 " />
      <p id="text"> Firstname: {firstname ? firstname :"No Name"} </p> */}

      {/* <label htmlFor="">Last Name:</label>
      <input onChange={handleChange} type="text" className="border border-gray-600" />  */}


    </div>
  )
}


export default App

{/* <h1 className="text-3xl font-bold m-[30px] text-slate-500 underline">
Hello world!
</h1> */}