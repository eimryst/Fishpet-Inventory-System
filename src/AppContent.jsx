import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import ForgotPassword from "./pages/ForgotPassword";

export default function AppContent() {
  // const [sidebarToggle, setSidebarToggle] = useState(false);
  return (
    <div>
      <div>{/* <Sidebar /> */}</div>
      <div>
        {/* <Header /> */}
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
          <Route
            path="/accounts"
            element={<div className="flex justify-center">Accounts</div>}
          />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}
