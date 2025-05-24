import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";
import {
  ChevronDown,
  Filter,
  Package,
  Plus,
  Search,
  ShoppingCart,
} from "lucide-react";

export default function Stocks() {
  usePageTitle("Stocks");
  return (
    <div className="space-y-6 px-4 pt-20 pb-20 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b pb-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <h1 className="text-2xl font-bold text-gray-800 text-center sm:text-left">
            Inventory Management
          </h1>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-3xl transition-colors">
              <Package size={16} />
              Restock
            </button>
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-3xl transition-colors">
              <ShoppingCart size={16} />
              Bulk Sell
            </button>
            <button className="flex items-center gap-2 bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-3xl transition-colors">
              <Plus size={16} />
              Add New Shelf
            </button>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <input
              type="text"
              className="w-full pl-12 pr-4 py-3 border rounded-3xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
            <Search
              size={20}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>
          <div className="relative">
            <button className="flex bg-white items-center justify-between min-w-[300px] px-4 py-3 border rounded-3xl hover:bg-gray-50">
              <div className="flex items-center gap-2">
                <Filter size={20} className="text-gray-500" />
                <span className="text-gray-700">Shelf Title</span>
              </div>
              <ChevronDown size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
