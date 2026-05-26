import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigationItems = [
    { label: "Overview", path: "/dashboard", icon: "📊" },
    { label: "Burnout Projections", path: "/predictions", icon: "⚡" },
    { label: "AI Insights", path: "/insights", icon: "🧠" },
    { label: "Device Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-[#ffffff] border-r border-[#e8e8ed] flex flex-col justify-between p-4 z-30">
      <div className="space-y-8">
        {/* Brand Header */}
        <div className="px-3 pt-2" onClick={() => navigate("/")}>
          <span className="text-[20px] font-semibold tracking-tight text-[#1d1d1f] cursor-pointer">
            prodrome<span className="text-[#0066cc]">.</span>
          </span>
        </div>

        {/* Dynamic Navigation Track */}
        <nav className="space-y-1">
          {navigationItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <button
                key={item.path}
                onClick={() => navigate(item.path)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-[15px] font-medium tracking-tight transition-all rounded-[10px] ${
                  isActive
                    ? "bg-[#0066cc] text-white font-semibold shadow-sm"
                    : "text-[#1d1d1f] hover:bg-[#f5f5f7] bg-transparent"
                }`}
              >
                <span
                  className={`text-base ${isActive ? "brightness-100" : "opacity-80"}`}
                >
                  {item.icon}
                </span>
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Profile Footer Anchor Context */}
      <div className="border-t border-[#e8e8ed] pt-4 flex items-center gap-3 px-2">
        <div className="w-9 h-9 bg-[#f5f5f7] rounded-full border border-[#e8e8ed] flex items-center justify-center text-sm font-semibold text-[#0066cc]">
          YU
        </div>
        <div className="text-left overflow-hidden">
          <p className="text-sm font-semibold text-[#1d1d1f] truncate">
            Demo Account
          </p>
          <p className="text-xs text-[#86868b] truncate">active_session</p>
        </div>
      </div>
    </aside>
  );
};
