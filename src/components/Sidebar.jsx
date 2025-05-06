import { BarChart, DollarSign, Home, User } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ sidebarToggle }) {
  const navigate = useNavigate();
  const menuItems = [
    { name: "Dashboard", path: "/dashboard", icon: <Home /> },
    { name: "Stocks", path: "/stocks", icon: <BarChart /> },
    { name: "Sales History", path: "/sales-history", icon: <DollarSign /> },
  ];

  function matchPathRoute(route) {
    return route === location.pathname;
  }
  return (
    <div
      className={`z-50 fixed top-16 wleft-0 h-[calc(100%-64px)] bg-white border-r px-4 py-2 w-64 transition-transform duration-300 ${
        sidebarToggle ? "-translate-x-full" : "translate-x-0"
      }`}
    >
      <ul>
        {menuItems.map((item) => (
          <li
            key={item.name}
            onClick={() => navigate(item.path)}
            className={`flex items-center gap-x-4 py-2 px-3 my-2 transition-all duration-300 font-semibold border border-black border-b-[3px] cursor-pointer rounded-lg ${
              matchPathRoute(item.path)
                ? "text-white font-bold bg-gray-400 hover:bg-gray-500"
                : "text-black hover:bg-gray-200 hover:text-black"
            }`}
          >
            <span className="mt-1 items-center justify-center inline-block w-6 h-6 mr-2">
              {item.icon}
            </span>
            <span>
              <div>{item.name}</div>
            </span>
          </li>
        ))}
      </ul>
      <div className="fixed bottom-3 left-0 w-64 px-4 border-t-2 pt-2 bg-white transition-transform duration-300">
        <li
          onClick={() => navigate("/accounts")}
          className={`flex items-center gap-x-4 rounded-lg py-2 px-3 transition-all duration-300 font-semibold cursor-pointer border border-black border-b-[3px] ${
            matchPathRoute("/accounts")
              ? "text-white font-bold bg-gray-400 hover:bg-gray-500"
              : "text-black hover:bg-gray-200 hover:text-black"
          }`}
        >
          <span className="items-center justify-center inline-block w-6 h-6 mr-2">
            <User />
          </span>
          <div>Accounts</div>
        </li>
      </div>
    </div>
  );
}
