import React from "react";
import { usePageTitle } from "../hooks/usePageTitle";

export default function Settings() {
  usePageTitle("Settings");
  return (
    <>
      <div className="min-h-screen pt-16 md:pt-20 px-2 sm:px-4 bg-gray-50 flex justify-center items-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 md:mb-8 px-2">
            Settings
          </h1>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-200 overflow-x-auto">
              <button
                className={`flex-1 min-w-[120px] px-4 md:px-6 py-3 md:py-4 font-medium text-sm capitalize transition-colors duration-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50`}
              >
                Appearance
              </button>
              <button
                className={`flex-1 min-w-[120px] px-4 md:px-6 py-3 md:py-4 font-medium text-sm capitalize transition-colors duration-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50`}
              >
                Notifications
              </button>
              <button
                className={`flex-1 min-w-[120px] px-4 md:px-6 py-3 md:py-4 font-medium text-sm capitalize transition-colors duration-200 border-b-2 border-cyan-500 text-cyan-600 bg-cyan-50`}
              >
                Inventory
              </button>
            </div>
            {/* Tab Content */}
            <div className="p-4 md:p-8">
              {/* Appearance Tab */}
              <div className="hidden space-y-6">
                <div className="bg-gray-50 p-4 md:p-6 rounded-3xl">
                  <h2 className="md:text-lg font-semibold text-gray-800 mb-4">
                    Font Size
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    <button
                      className={`flex-1 min-w-[100px] px-4 py-2 md:px-6 md:py-3 rounded-3xl text-sm transition-all duration-200 capitalize bg-white text-gray-700 hover:bg-gray-100 border border-gray-200`}
                    >
                      Small
                    </button>
                    <button
                      className={`flex-1 min-w-[100px] px-4 py-2 md:px-6 md:py-3 rounded-3xl transition-all duration-200 capitalize bg-cyan-600 text-white shadow-md`}
                    >
                      Medium
                    </button>
                    <button
                      className={`flex-1 min-w-[100px] px-4 py-2 md:px-6 md:py-3 rounded-3xl text-lg transition-all duration-200 capitalizde bg-white text-gray-700 hover:bg-gray-100 border border-gray-200`}
                    >
                      Large
                    </button>
                  </div>
                  <p className="mt-3 text-sm text-gray-500">
                    Adjust test size throughout the application for better
                    readability.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 md:p-6 rounded-3xl">
                  <h2 className="md:text-lg font-semibold text-gray-800 mb-4">
                    Compact Mode
                  </h2>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-700 text-sm">
                        Reduce spacing between elements
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Display more content on screen by reducing <br />
                        padding and margins.
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-12 h-6 md:w-14 md:h-7 bg-gray-200 peer-focus:outline-none rounded-full relative peerafter:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-cyan-600 peer-checked:after:translate-x-7" />
                    </label>
                  </div>
                </div>
              </div>
              {/* Notifications Tab */}
              <div className="hidden space-y-4 md:space-y-6">
                <div className="bg-gray-50 p-4 md:p-6 rounded-3xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Enable Notifications
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">
                        Enable or disable all notifications
                      </p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-12 h-6 md:w-14 md:h-7 bg-gray-200 peer-focus:outline-none rounded-full relative peerafter:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-cyan-600 peer-checked:after:translate-x-7" />
                    </label>
                  </div>
                </div>
                <>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 md:p-6 rounded-3xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            Email Notifications
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Receive notifications for email <br />
                            notifications
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-12 h-6 md:w-14 md:h-7 bg-gray-200 peer-focus:outline-none rounded-full relative peerafter:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-cyan-600 peer-checked:after:translate-x-7" />
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-3xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            Low Stock Alerts
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Receive notifications for low <br />
                            stock alerts
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-12 h-6 md:w-14 md:h-7 bg-gray-200 peer-focus:outline-none rounded-full relative peerafter:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-cyan-600 peer-checked:after:translate-x-7" />
                        </label>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 md:p-6 rounded-3xl">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800">
                            System Updates
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            Receive notifications for system <br />
                            updates
                          </p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input type="checkbox" className="sr-only peer" />
                          <div className="w-12 h-6 md:w-14 md:h-7 bg-gray-200 peer-focus:outline-none rounded-full relative peerafter:content-[''] after:absolute after:top-1 after:left-1 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 md:after:h-5 md:after:w-5 after:transition-all peer-checked:bg-cyan-600 peer-checked:after:translate-x-7" />
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 md:p-6 rounded-3xl">
                    <h3 className="font-semibold text-gray-800 mb-4">
                      Notification Frequency
                    </h3>
                    <div className="relative">
                      <select className="w-full p-4 text-base border border-gray-300 rounded-3xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 appearance-none cursor-pointer">
                        <option value="">Every 15 minutes</option>
                        <option value="">Every 30 minutes</option>
                        <option value="">Every 2 hours</option>
                        <option value="">Every 4 hours</option>
                        <option value="">Every 12 hours</option>
                        <option value="">Every 24 hours</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-500">
                      Choose how often you want to receive notifications
                    </p>
                  </div>
                </>
              </div>
              <div>
                {/* Inventory Tab */}
                <div className="space-y-4 md:space-y-6">
                  <div className="bg-gray-50 p-4 md:p-6 rounded-3xl">
                    <h2 className="md:text-lg font-semibold text-gray-800 mb-4">
                      Default Unit
                    </h2>
                    <div className="relative">
                      <select className="w-full p-4 text-base border border-gray-300 rounded-3xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 appearance-none cursor-pointer">
                        <option value="">Pieces</option>
                        <option value="">Kilograms</option>
                        <option value="">Liters</option>
                        <option value="">Packs</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <svg
                          stroke="currentColor"
                          className="w-5 h-5 text-gray-400"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 md:p-6 rounded-3xl">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <h2 className="md:text-lg font-semibold text-gray-800">
                        Low Stock Threshold
                      </h2>
                      <button className="px-4 py-2 text-sm text-cyan-600 hover:text-cyan-700 font-medium rounded-lg hover:bg-cyan-50 transition-colors w-full md:w-auto">
                        Apply to All Items
                      </button>
                    </div>
                    <div className="flex items-center">
                      <input
                        type="number"
                        className="w-full p-3 border border-gray-300 rounded-3xl bg-white focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                      />
                      <span className="ml-3 text-gray-500">units</span>
                    </div>
                    <p className="mt-3 text-sm text-gray-500">
                      Items with stock below this number will be marked as low{" "}
                      <br />
                      stock and trigger notifications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Save Button */}
          <div className="flex justify-end mt-6 px-2">
            <button
              className="w-full md:w-auto px-6 py-3 bg-cyan-600 text-white font-semibold rounded-3xl mb-6
            transition-all duration-200 hover:bg-cyan-700 hover:shadow-md focus:outline-none focus:ring-cyan-500 focus:ring-offset-2"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
