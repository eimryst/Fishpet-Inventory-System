import { Eye, EyeOff, Link } from "lucide-react";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-white border-b shadow-sm sticky top-0 w-full z-50">
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
      <div className="flex justify-center items-center w-full h-screen py-4">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <div className="w-11/12 max-w-[700px] px-10 py-20 rounded-3xl bg-white border-2 border-gray-100">
            <h1 className="text-5xl font-bold text-center">Log in</h1>
            <div className="mt-8">
              <form>
                <div className="flex flex-col">
                  <label className="text-md font-medium">Email</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 mt-1 bg-transparent"
                  />
                </div>
                <div className="flex flex-col mt-4">
                  <label className="text-md font-medium">Password</label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      className="w-full border-2 border-gray-100 rounded-xl px-4 py-3 mt-1 bg-transparent"
                    />
                    {showPassword ? (
                      <Eye
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                        className="absolute right-4 top-4 text-xl cursor-pointer"
                      />
                    ) : (
                      <EyeOff
                        onClick={() =>
                          setShowPassword((prevState) => !prevState)
                        }
                        className="absolute right-4 top-4 text-xl cursor-pointer"
                      />
                    )}
                  </div>
                </div>
                <div className="mt-8 flex justify-end">
                  <p className="font-medium text-base text-cyan-700 hover:text-cyan-800 transition duration-200 ease-in-out">
                    Forgot Password?
                  </p>
                </div>
                <div className="mt-8 flex flex-col gap-y-4">
                  <button
                    type="submit"
                    className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform py-4 bg-cyan-600 rounded-3xl text-white font-semibold text-sm uppercase"
                  >
                    Log in
                  </button>
                  <div className="flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300">
                    <p className="text-center font-semibold mx-4">OR</p>
                  </div>
                  <div className="flex bg-green-500 justify-center py-4 rounded-3xl text-white font-semibold cursor-pointer active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out transform">
                    <FcGoogle className="text-2xl bg-white rounded-full mr-2" />
                    Continue with Google
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="hidden relative w-1/2 h-full lg:flex items-center justify-center bg-white rounded-3xl">
          <div className="w-60 h-60 rounded-full bg-gradient-to-tr from-blue-500 to-teal-500 animate-spin" />
          <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg" />
        </div>
      </div>
    </div>
  );
}
