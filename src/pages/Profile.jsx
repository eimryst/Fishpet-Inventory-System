import {
  Edit,
  Lock,
  Mail,
  MapPin,
  Phone,
  Save,
  Shield,
  Trash2,
  User,
  X,
} from "lucide-react";
import React from "react";

export default function Profile() {
  return (
    <div className="min-h-screen pt-20 px-4 pb-10 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-8">Profile</h1>
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-6">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-32">
            {/* Empty Part */}
          </div>
          <div className="px-6 pb-6 relative">
            <div className="relative -m-16 flex justify-center">
              <img
                className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                src="src\assets\orig-logo-nobg.png"
              />
              <div className="absolute top-0 w-32 h-32 rounded-full border-4 border-white bg-cyan-100 flex items-center justify-center text-cyan-600 text-4xl font-bold"></div>
            </div>
            <div className="text-center mt-3">
              <h2 className="text-2xl font-bold text-gray-800">Name</h2>
              <p className="text-gray-500">
                First Name, Middle Name, Last Name
              </p>
              <p className="text-gray-500">Complete your profile details.</p>
            </div>
          </div>
        </div>
        <form className="space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <div className="flex items-center mb-4">
              <User className="text-cyan-600 mr-2" />
              <h2 className="text-xl font-semibold">Account Information</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input type="text" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <div className="flex items-center">
                  <Mail className="text-gray-400 mr-2" />
                  <input
                    type="email"
                    className="w-full p-3 bg-gray-50 border rounded-lg text-gray-500"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <button className="flex items-center text-cyan-600 hover:text-cyan-800 font-medium text-sm transition-colors">
                  <Lock size={18} className="mr-1" />
                  Send password reset link
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md overflow-hidden p-6">
            <div className="flex items-center mb-4">
              <Shield className="text-cyan-600 mr-2" />
              <h2 className="text-xl font-semibold">Personal Details</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input type="text" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Middle Name
                </label>
                <input type="text" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input type="text" className="w-full p-3 border rounded-lg" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Number
                </label>
                <div className="flex items-center">
                  <Phone className="text-gray-400 mr-2" />
                  <input type="text" className="w-full p-3 border rounded-lg" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <div className="flex items-center">
                  <MapPin className="text-gray-400 mr-2" />
                  <input type="text" className="w-full p-3 border rounded-lg" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-4 space-x-4">
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium transition-colors">
              <X size={18} className="mr-1" />
              Cancel
            </button>
            <button className="flex items-center px-4 py-2 bg-cyan-600 rounded-lg text-white font-medium hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors">
              <Save size={18} className="mr-1" />
              Save Changes
            </button>
            <button className="flex items-center px-4 py-2 bg-cyan-600 rounded-lg text-white font-medium hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition-colors">
              <Edit size={18} className="mr-1" />
              Edit Profile
            </button>
            <button className="flex items-center px-4 py-2 border border-red-500 rounded-lg text-red-500 hover:bg-red-50 font-medium transition-colors">
              <Trash2 size={18} className="mr-1" />
              Delete Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
