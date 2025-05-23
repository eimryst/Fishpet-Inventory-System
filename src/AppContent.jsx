import React, { useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";
import Settings from "./pages/Settings";
import Accounts from "./pages/Accounts";
import AddAccount from "./components/AddAccount";

export default function AppContent() {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const location = useLocation();

  // location methods
  const isLoginPage = location.pathname === "/";
  const isForgotPasswordPage = location.pathname === "/forgot-password";

  const handleSidebarToggle = (newState) => {
    setSidebarToggle(newState);
  };
  return (
    <div>
      {!(isLoginPage || isForgotPasswordPage) && (
        <div>
          <Sidebar sidebarToggle={sidebarToggle} />
        </div>
      )}
      <div>
        {!(isLoginPage || isForgotPasswordPage) && (
          <Header
            sidebarToggle={sidebarToggle}
            setSidebarToggle={handleSidebarToggle}
          />
        )}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/home" element={<div>Home</div>} />
          <Route
            path="/dashboard"
            element={<div className="flex justify-center">Dashboard</div>}
          />
          <Route
            path="/stocks"
            element={<div className="flex justify-center">Stocks</div>}
          />
          <Route
            path="/sales-history"
            element={<div className="flex justify-center">Sales History</div>}
          />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/accounts/add" element={<AddAccount />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
}
