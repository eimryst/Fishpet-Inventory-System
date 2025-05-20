import { Bell, Menu, UserCircle } from "lucide-react";
import React from "react";
import { BiNotification } from "react-icons/bi";

export default function Header({ sidebarToggle, setSidebarToggle }) {
  return (
    <div className="bg-gray-200 px-4 py-3 flex justify-between top-0 left-0 right-0 h-16 fixed">
      <div className="flex items-center gap-4">
        <button 
        onClick={() => setSidebarToggle(!sidebarToggle)}
        className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors">
          <Menu className="w-5 h-5 text-gray-600" />
        </button>
        <img
          className="h-10 cursor-pointer transition-transform"
          src="src\assets\fishpet-header.png"
          alt="fishpet header with logo"
        />
      </div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <button className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors">
            <Bell className="w-6 h-6 text-gray-600" />
          </button>
        </div>
        <div className="relative">
          <button className="p-2 rounded-lg bg-white hover:bg-gray-100 transition-colors">
            <UserCircle className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
