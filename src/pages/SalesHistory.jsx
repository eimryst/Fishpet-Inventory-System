import { Calendar, DollarSign, Package2Icon, TrendingUp } from "lucide-react";
import React from "react";

export default function SalesHistory() {
  return (
    <div className="min-h-screen p-2 pt-20 sm:p-6 sm:pt-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl sm:text-lg font-bold mb-3 sm:mb-6 pb-4 border-b">
          Sales & Inventory History
        </h1>

        {/* Sales Summary Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mb-3 sm:mb-6">
          {/* Card 1 start*/}
          <div className="bg-white rounded-3xl shadow-sm p-2 sm:p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-100 p-1.5 sm:p-2 mr-2 sm:mr-3">
                <DollarSign className="h-4 w-4 sm:h-5 sm:w-5 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-[10px] sm:text-sm font-medium text-gray-500">
                  Today's Income
                </h3>
                <p className="text-sm sm:text-lg font-semibold mt-0.5">
                  $99.99
                </p>
              </div>
            </div>
          </div>
          {/* Card 1 end */}
          {/* Card 2 start*/}
          <div className="bg-white rounded-3xl shadow-sm p-2 sm:p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-100 p-1.5 sm:p-2 mr-2 sm:mr-3">
                <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-green-600" />
              </div>
              <div>
                <h3 className="text-[10px] sm:text-sm font-medium text-gray-500">
                  Today's Sales
                </h3>
                <p className="text-sm sm:text-lg font-semibold mt-0.5">
                  $99.99
                </p>
              </div>
            </div>
          </div>
          {/* Card 2 end */}
          {/* Card 3 start*/}
          <div className="bg-white rounded-3xl shadow-sm p-2 sm:p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-100 p-1.5 sm:p-2 mr-2 sm:mr-3">
                <Calendar className="h-4 w-4 sm:h-5 sm:w-5 text-violet-600" />
              </div>
              <div>
                <h3 className="text-[10px] sm:text-sm font-medium text-gray-500">
                  This Week's Sales
                </h3>
                <p className="text-sm sm:text-lg font-semibold mt-0.5">
                  $99.99
                </p>
              </div>
            </div>
          </div>
          {/* Card 3 end */}
          {/* Card 4 start*/}
          <div className="bg-white rounded-3xl shadow-sm p-2 sm:p-4">
            <div className="flex items-center">
              <div className="rounded-full bg-indigo-100 p-1.5 sm:p-2 mr-2 sm:mr-3">
                <Package2Icon className="h-4 w-4 sm:h-5 sm:w-5 text-amber-600" />
              </div>
              <div>
                <h3 className="text-[10px] sm:text-sm font-medium text-gray-500">
                  Total Items Restocked
                </h3>
                <p className="text-sm sm:text-lg font-semibold mt-0.5">
                  5 items
                </p>
              </div>
            </div>
          </div>
          {/* Card 4 end */}
        </div>
      </div>
    </div>
  );
}
