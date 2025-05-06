import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login";

export default function AppContent() {
  return (
    <div>
      <div>
        <Sidebar
        // sidebarToggle="false"
        />
      </div>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
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
        </Routes>
      </div>
    </div>
  );
}
