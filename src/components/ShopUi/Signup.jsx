import { Link } from "react-router-dom";
import { User, Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AXIOS_API from "../../api/api"

export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const { username, email, password } = formData;

      console.log("Sending data:", { username, email, password }); // Debug log

      const response = await AXIOS_API.post("/user/signup", {
        username: formData.username,
        email,
        password,
      });

      console.log("Response:", response); // Debug log
      alert("Account created successfully!");
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Error details:", error); // Full error
      console.error("Error response:", error.response); // Response data
      console.error("Error message:", error.message); // Message
      
      alert(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong."
      );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className=" w-auto  bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
      
        <div className="p-10  flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            Create Account
          </h2>

          <p className="text-gray-500 mb-8">
            Fill in the details below to register.
          </p>

          <form className="space-y-5 " onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block  text-gray-700 font-medium mb-2">
                Full Name
              </label>
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-500">
                <User size={20} className="text-gray-400 mr-3" />
                <input
                  type="text"
                  name="username"
                  required
                  placeholder="Enter your username"
                  className="w-full outline-none"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Email Address
              </label>
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-500">
                <Mail size={20} className="text-gray-400 mr-3" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="w-full outline-none"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Password
              </label>
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-500">
                <Lock size={20} className="text-gray-400 mr-3" />
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="Create a password"
                  className="w-full outline-none"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Confirm Password
              </label>
              <div className="flex items-center border rounded-xl px-4 py-3 focus-within:border-blue-500">
                <Lock size={20} className="text-gray-400 mr-3" />
                <input
                  type="password"
                  name="confirmPassword"
                  required
                  placeholder="Confirm your password"
                  className="w-full outline-none"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold transition duration-300"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="text-blue-600 font-semibold ml-2 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}