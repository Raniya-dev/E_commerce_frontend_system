import { StrictMode } from 'react'
import {store} from "./redux/store.js"
import './index.css'
import App from './App.jsx'
import ReactDOM from "react-dom/client"
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import RootLayout from './layout/RootLayout.jsx'

import Navbar from './components/ShopUi/Navbar.jsx'
import Login from './components/ShopUi/Login.jsx'
import ProductSection from './components/ShopUi/ProductSection.jsx'
import CartUI from './components/ShopUi/CartUI.jsx'
import ProtectRoute from './auth/protect.jsx'
import Profile from './components/ShopUi/Profile.jsx'
import Home from './components/ShopUi/Home.jsx'
import ViewProduct from './components/ShopUi/ViewProduct.jsx'
import Signup from './components/ShopUi/Signup.jsx'
import Contact from './components/ShopUi/Contact.jsx'
import {Provider} from "react-redux"


const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,

    children:[
      {index:true,element:<ProductSection/>},
      {path:"home",element:<Home/>},
      {path:"login",element:<Login/>},
      {path:"cart",element:(<ProtectRoute><CartUI/></ProtectRoute>)},
      {path:"profile",element:(<ProtectRoute><Profile/></ProtectRoute>)},
    { path: "products/:id", element: (<ProtectRoute><ViewProduct /></ProtectRoute>) },
    {path:"signup",element:<Signup/>},
    {path:"contact",element:<Contact/>}
  

      
    ]
  }
],
{
  basename:"/E_commerce_frontend_system/"
})



ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
