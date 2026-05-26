import React from 'react';
import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { TopBar } from './TopBar';

export const AppLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#1d1d1f] font-sans antialiased">
      {/* Static Drawer Frame Element */}
      <Sidebar />

      {/* Main Structural Right Column Grid */}
      <div className="pl-64 flex flex-col min-h-screen">
        {/* Fixed Header Bar */}
        <TopBar />

        {/* Inner Scroll Container Node Context */}
        <main className="flex-1 pt-24 px-8 pb-12 overflow-y-auto max-w-350 w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};