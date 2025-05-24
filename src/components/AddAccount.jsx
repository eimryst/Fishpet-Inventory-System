import { CornerDownLeft, Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import { BsBack } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

export default function AddAccount() {
  usePageTitle("Add Account");
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <div className="flex flex-col h-screen m-5 mt-20 md:mt-15 items-center justify-center">
      <div className="relative bg-white rounded-3xl w-full max-w-4xl sm:mx-4 shadow-xl h-full sm:h-auto max-h-full flex flex-col overflow-hidden justify-center items-center mx-auto">
        <div className="flex w-full justify-between items-center px-4 sm:px-6 py-3 sm:py-4 border-b sticky top-0 bg-gray-200 z-10">
          <h3 className="sm:text-lg font-medium text-gray-800">Add Account</h3>
          <button
            onClick={() => navigate("/accounts")}
            className="flex ml-2 text-white px-4 py-1 rounded-full hover:bg-red-600 bg-red-500 "
          >
            <CornerDownLeft size={16} className="mr-1 mt-1" />
            Return
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-0">
          <form className="p-4 sm:p-6">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Enter full name..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="09XX-XXXX-XXXX"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Enter address..."
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  placeholder="Enter email address..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 pr-10"
                    placeholder="Enter password..."
                  />
                  <button
                    className="absolute top-1/2 -translate-y-1/2 right-3 text-gray-500 hover:text-gray-700"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={16} /> : <EyeOff size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <select className="w-full px-3 py-2.5 text-sm border border-gray-300 rounded-3xl shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500">
                  <option value="employee">Employee</option>
                  <option value="admin">Admin</option>
                </select>
              </div>

              <div className="mt-4">
                <div className="space-x-3">
                  <div className="flex items-center gap-2 mt-4">
                    <input
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300"
                    />
                    <label className="text-sm text-gray-600">
                      I confirm that I have read and understood the{" "}
                      <a
                        href="/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:underline"
                      >
                        Privacy Policy
                      </a>
                      . I consent to the collection, processing, and storage of
                      my personal information in accordance with the{" "}
                      <a
                        href="https://privacy.gov.ph/data-privacy-act/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-600 hover:underline"
                      >
                        Data Privacy Act of 2012
                      </a>
                      .
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center my-5 before:border-t before:flex-1 before:border-gray-200 after:border-t after:flex-1 after:border-gray-200">
              <p className="text-center text-sm font-medium text-gray-500 px-4">
                OR
              </p>
            </div>

            <div className="mb-5">
              <button className="rounded-3xl w-full bg-green-400 py-2 ">
                Continue with Google
              </button>
            </div>

            <div className="sticky inset-0 z-20 flex flex-col-reverse sm:flex-row sm:justify-end gap-2 sm:gap-3 pt-4 border-gray-200 bg-white border-t-2">
              <button
                type="submit"
                className="w-full sm:w-auto px-4 py-2.5 border border-transparent rounded-3xl shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 disabled:opacity-50"
              >
                {loading ? "Creating..." : "Create Account"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
