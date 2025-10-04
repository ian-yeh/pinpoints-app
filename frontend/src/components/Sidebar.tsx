"use client";
import { useState } from 'react';
import { Home, TrendingUp, Settings, Menu, X, User, Bell } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: TrendingUp, label: 'Trending', href: '/trending' },
    { icon: Bell, label: 'Notifications', href: '/notifications' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Settings, label: 'Settings', href: '/settings' },
  ];

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 lg:hidden p-2 rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-gray-900 text-white z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } w-64 lg:translate-x-0`}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header */}
          <div className="p-6 border-b border-gray-800">
            <h1 className="text-2xl font-bold">YourApp</h1>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-800 transition-colors group"
                >
                  <Icon size={20} className="group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-800">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <User size={20} />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">John Doe</p>
                <p className="text-xs text-gray-400">john@example.com</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Spacer for main content */}
      <div className="lg:ml-64" />
    </>
  );
};

export default Sidebar;
