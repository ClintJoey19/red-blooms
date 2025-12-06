"use client";
import React, { useState } from "react";
import {
  LayoutDashboard,
  Palette,
  FileText,
  Clock,
  CreditCard,
  Settings,
  LogOut,
  ChevronDown,
  Plus,
  Folder,
} from "lucide-react";

const page = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const currentProject = { name: "The Vanderbilt Wedding", id: 1 };

  const projects = [
    { name: "The Vanderbilt Wedding", id: 1 },
    { name: "Summer Estate Gala", id: 2 },
    { name: "Vogue Launch Party", id: 3 },
  ];

  const activeClass =
    "bg-[oklch(0.57_0.209_22.6524)] text-white shadow-lg shadow-red-900/20";
  const inactiveClass = "text-gray-400 hover:bg-gray-50 hover:text-gray-900";

  const menuItems = [
    { name: "Overview", icon: <LayoutDashboard size={20} />, active: true },
    { name: "Design Deck", icon: <Palette size={20} />, active: false },
    { name: "Proposal", icon: <FileText size={20} />, active: false },
    { name: "Timeline", icon: <Clock size={20} />, active: false },
    { name: "Financials", icon: <CreditCard size={20} />, active: false },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-100 flex flex-col justify-between py-6 px-4 fixed left-0 top-0 z-50">
      {/* 1. PROJECT SWITCHER (Replaces static Logo) */}
      <div className="relative mb-8">
        <button
          onClick={() => setDropdownOpen(!isDropdownOpen)}
          className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200 group"
        >
          <div className="flex items-center gap-3 overflow-hidden">
            {/* Project Icon / Avatar */}
            <div className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center font-serif text-sm flex-shrink-0">
              {currentProject.name.charAt(0)}
            </div>
            <div className="text-left overflow-hidden">
              <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
                Current Project
              </p>
              <p className="text-sm font-serif font-medium text-gray-900 truncate w-32 group-hover:text-accent transition-colors">
                {currentProject.name}
              </p>
            </div>
          </div>
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform duration-300 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-2 animate-in fade-in zoom-in-95 duration-200">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 px-3 py-2">
              Switch Project
            </p>

            {projects.map((p) => (
              <button
                key={p.id}
                className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-sm text-left mb-1"
              >
                <div
                  className={`w-2 h-2 rounded-full ${
                    p.id === currentProject.id ? "bg-accent" : "bg-gray-300"
                  }`}
                ></div>
                <span
                  className={
                    p.id === currentProject.id
                      ? "font-medium text-gray-900"
                      : "text-gray-600"
                  }
                >
                  {p.name}
                </span>
              </button>
            ))}

            <div className="h-px bg-gray-100 my-1"></div>

            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 text-xs text-gray-500 hover:text-accent transition-colors">
              <Folder size={14} />
              View All Projects
            </button>
            <button className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-50 text-xs text-gray-500 hover:text-accent transition-colors">
              <Plus size={14} />
              Create New Project
            </button>
          </div>
        )}
      </div>

      {/* 2. MAIN NAVIGATION */}
      <div className="flex-1 overflow-y-auto">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.name}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium
                ${
                  item.active
                    ? "bg-accent text-white shadow-lg shadow-red-900/20"
                    : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                }`}
            >
              {item.icon}
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3. FOOTER (Account) */}
      <div className="pt-4 border-t border-gray-100">
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-500 hover:text-gray-900 transition-colors text-sm">
          <Settings size={18} />
          Settings
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-gray-400 hover:text-red-500 transition-colors text-sm">
          <LogOut size={18} />
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default page;
