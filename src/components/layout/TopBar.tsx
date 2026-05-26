import React from "react";
import { useNavigate } from "react-router-dom";

export const TopBar: React.FC = () => {
  const navigate = useNavigate();

  const handleLogoutBypass = () => {
    // TODO: Connect real Supabase client clear auth session context hook later
    navigate("/login");
  };

  return (
    <header className="h-16 border-b border-[#e8e8ed] bg-[#ffffff]/80 backdrop-blur-md fixed top-0 right-0 left-64 z-20 px-8 flex items-center justify-between">
      {/* Search Context or Status Node Placeholder */}
      <div className="flex items-center gap-2 text-xs font-mono bg-[#f5f5f7] px-3 py-1 rounded-full text-[#86868b]">
        <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block animate-pulse"></span>
        Ecosystem Sync Active
      </div>

      {/* Control Utility Buttons */}
      <div className="flex items-center gap-4">
        <button className="text-sm text-[#86868b] hover:text-[#1d1d1f] transition-colors relative p-1">
          🔔
          <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-[#0066cc] rounded-full"></span>
        </button>
        <button
          onClick={handleLogoutBypass}
          className="text-xs font-semibold text-red-500 hover:bg-red-50 border border-transparent hover:border-red-100 px-3 py-1.5 rounded-lg transition"
        >
          Sign Out
        </button>
      </div>
    </header>
  );
};
