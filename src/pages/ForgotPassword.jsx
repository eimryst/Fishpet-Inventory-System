import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Login() {
  usePageTitle("Forgot Password");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(e) {
    e.preventDefault();
    try {
      navigate("/dashboard");
      toast.success("Yey!");
    } catch (error) {
      console.log(error);
      toast.error("Boo!");
    }
  }
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white border-b shadow-sm sticky top-0 w-full z-50 mb-6">
        <header className="flex justify-between items-center px-3 mx-auto py-2 max-w-6xl">
          <div>
            <img
              className="h-10 cursor-pointer"
              src="src\assets\fishpet-header.png"
              alt="Fishpet Logo"
            />
          </div>
          <div>
            <p className="text-cyan-600 hover:text-cyan-800 font-medium transition-colors cursor-pointer">
              Back to Home
            </p>
          </div>
        </header>
      </div>
      <div className="flex justify-center items-center w-full h-screen pb-4">
        <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-white rounded-3xl">
          <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-red-500 to-pink-500 animate-spin" />
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
            <h1 className="text-5xl font-bold text-center">Forgot Password</h1>
            <div className="mt-8">
              <form onSubmit={onSubmit}>
                <div className="flex flex-col">
                  <label className="text-md font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 mt-1 bg-transparent"
                  />
                </div>
                <div className="mt-8 flex justify-end">
                  <p className="font-medium text-base text-cyan-700 hover:text-cyan-800 transition duration-200 ease-in-out">
                    <Link to="/">Log in instead?</Link>
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                  <button
                    type="submit"
                    className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-red-600 rounded-3xl text-white font-semibold text-sm uppercase"
                  >
                    Send Reset Link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
