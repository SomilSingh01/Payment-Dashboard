import React from "react";
import {
  LayoutDashboard,
  Folder,
  BarChart2,
  FileText,
  Puzzle,
  Building2,
  Users,
  HelpCircle,
  Bell,
} from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-200  flex flex-col justify-between py-4">
      {/* Top Logo & Search */}
      <div className="px-4">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">ProPeak</h1>
          <button className="text-gray-500 text-sm border rounded-xl px-2 py-1 hover:bg-black hover:text-white transition duration-600">
            ⌘Leven
          </button>
        </div>

        {/* Menu Items */}
        <ul className="space-y-2 text-sm font-medium text-gray-700">
          <li className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white transition duration-400">
            <LayoutDashboard size={18} />
            Dashboard
          </li>
          <li className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white  transition duration-400">
            <Folder size={18} />
            Projects
          </li>
          <li className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white transition duration-400">
            <BarChart2 size={18} />
            Analytics
          </li>
          <li className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white relative transition duration-400">
            <FileText size={18} />
            Reports
            <span className="absolute right-3 text-xs text-white bg-red-500 px-1.5 py-0.5 rounded">
              New
            </span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white transition duration-400">
            <Puzzle size={18} />
            Extensions
          </li>
          <li className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white transition duration-400">
            <Building2 size={18} />
            Companies <span className="ml-auto text-xs text-gray-500">17</span>
          </li>
          <li className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-white transition duration-400">
            <Users size={18} />
            People <span className="ml-auto text-xs text-gray-500">164</span>
          </li>
        </ul>
      </div>

      {/* Bottom Section */}
      <div className="px-4 space-y-2">
        <div className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white rounded-xl transition duration-400">
          <HelpCircle size={18} />
          Help center
        </div>
        <div className="flex items-center gap-2 px-3 py-2 text-sm hover:bg-white rounded-xl relative transition duration-400">
          <Bell size={18} />
          Notifications
          <span className="ml-auto text-xs text-white bg-red-500 px-1.5 py-0.5 rounded-full transition duration-400">
            3
          </span>
        </div>

        {/* User Profile */}
        <div className="flex items-center gap-2 p-3 bg-white rounded-xl transition duration-400">
          <img
            src="https://i.pravatar.cc/40"
            alt="User"
            className="w-8 h-8 rounded-full"
          />
          <div className="text-sm">
            <p className="font-semibold leading-none">Ember Crest</p>
            <p className="text-xs text-gray-500">Starter set overview</p>
            <p className="text-xs text-gray-500">3 of 5 projects created</p>
          </div>
        </div>

        <button className="w-full text-center text-sm bg-yellow-100 hover:bg-yellow-200 text-yellow-800 py-1.5 rounded-md font-semibold transition duration-400">
          🚀 Get full access
        </button>
      </div>
    </div>
  );
}
