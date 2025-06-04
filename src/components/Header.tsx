import React, { useState, useEffect } from 'react';
import { Search, Bell, Settings, User } from 'lucide-react';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 right-0 left-0 md:left-60 z-20 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        <div className="w-full max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search songs, artists, podcasts..."
              className="w-full py-2 pl-10 pr-4 bg-gray-800 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition-colors">
            <Bell size={20} />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <Settings size={20} />
          </button>
          <button className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors">
            <User size={16} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;