import React from 'react'
import { useState,useEffect } from 'react'
import AXIOS_API from '../../api/api'

function Home() {
    const[user,setUser]=useState({})

    const token= localStorage.getItem("token")

    const fetchUser = async()=>{
        const res = await AXIOS_API.get("/user/getprofile",
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            }
        )

        if(res.status === 200){
            setUser(res.data.user)
        }
    }

    useEffect(()=>{
        fetchUser()

    },[])
    console.log("so the user is ", user.name);

  return (
    <div className='text-center mt-2'>
      <h1 className='text-3xl font-bold mb-4'>Welcome {user.name ? user.name : 'Guest User'} to Our Shop</h1>
      
      <p className='text-lg text-gray-600'>
        Discover the latest trends and best deals!
      </p>
    </div>
  )
}

export default Home
