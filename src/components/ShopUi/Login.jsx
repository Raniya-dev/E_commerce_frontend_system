import { use, useState } from "react";
import AXIOS_API from "../../api/api"
import { useNavigate } from "react-router-dom";
import {Link} from "react-router-dom"

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();


  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlelogin = async () => {
    try {
      console.log("started");

    

   


      const response = await AXIOS_API.post("/user/login", {
        email: formData.email,
        password: formData.password
      });

    } catch (error) {

    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await AXIOS_API.post("/user/login", formData);
     

      if (res.status === 200) {
        console.log("login successfull", res.data);
        navigate("/",{replace:true})

      }

      console.log("Login success:", res.data);

      localStorage.setItem("token", res?.data?.token);
      setError("");

    } catch (err) {
      setError(err.response?.data?.errMsg || "Login failed");
      if(err.response?.status === 500){
        setError("Server error , please try again later")
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-400 transition duration-300"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center mt-6">
          Don't have an account?{" "}

          <Link to="/signup" className="text-blue-500 cursor-pointer hover:underline">
          <span className="text-blue-500 cursor-pointer hover:underline">
            Sign up
          </span>
          
          </Link>
        </p>
      </div>
    </div>
  );
}