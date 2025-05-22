import { Eye, Pencil, PlusCircle, Search, Trash2 } from "lucide-react";
import React from "react";

export default function Accounts() {
  return (
    <div className="min-h-screen pt-16 sm:pt-20 px-3 sm:px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto mb-4 sm:mb-8 mt-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4">
          User Accounts
        </h1>

        <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
          <div className="relative w-full sm:w-96">
            <input
              type="text"
              className="w-full pl-9 pr-3 py-2 text-sm rounded-3xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-cyan-600 text-white px-4 py-2 rounded-3xl hover:bg-cyan-700 transition-colors text-sm">
            <PlusCircle size={16} />
            <span>Add Account</span>
          </button>
        </div>
      </div>

      <div className="space-y-6 sm:space-y-8 max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">
          <div className="px-4 sm:px-6 py-3 sm:py-4 border-b border-gray-200 bg-gray-50">
            <h2 className="text-base sm:text-lg font-semibold text-gray-800">
              Administrators
            </h2>
          </div>

          <div className="overflow-x-auto">
            {/* Mobile view */}
            <div className="sm:hidden">
              <div className="border-b border-gray-200 p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 mr-3">
                      J
                    </div>
                    <div>
                      <div className="font-medium text-gray-900 flex items-center gap-1">
                        John Doe
                        <span className="ml-2 text-xs px-2 py-0/5 bg-cyan-100 text-cyan-800 rounded-full">
                          You
                        </span>
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5">
                        johndoe@email.com
                      </div>
                    </div>
                  </div>
                  <div>
                    <span className="px-2 py-1 inline-flex text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                      Admin
                    </span>
                  </div>
                </div>
                <div className="flex justify-end gap-2 mt-2">
                  <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-100 rounded-full">
                    <Eye size={16} />
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-100 rounded-full">
                    <Pencil size={16} />
                  </button>
                  <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-100 rounded-full">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop view */}
          <table className="w-full hidden sm:table">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell">
                  Joined
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Settings
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-8 w-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-700 mr-3">
                      J
                    </div>
                    <div className="font-medium text-gray-900">
                      John Doe{" "}
                      <span className="ml-2 text-xs px-2 py-0.5 bg-cyan-100 text-cyan-800 rounded-full">
                        You
                      </span>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                  johndoe@email.com
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-500 hidden md:table-cell">
                  01/01/1991
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs font-medium rounded-full bg-purple-100 text-purple-800">
                    Admin
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right">
                  <div className="flex justify-end gap-2">
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-100 rounded-full">
                      <Eye size={16} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-100 rounded-full">
                      <Pencil size={16} />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-blue-600 bg-gray-100 rounded-full">
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Employee Table */}
      <div>
        <div>
          <h2>Employees</h2>
        </div>

        <div>
          {/* Mobile view */}
          <div>
            <div>
              <div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
