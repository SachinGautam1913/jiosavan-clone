import React from 'react';
import { Home, Search, Library, PlusCircle, Heart, Music, User } from 'lucide-react';
import { Link } from './ui/Link';

const Sidebar = () => {
  return (
    <aside className="w-60 h-full bg-gray-900 text-white p-5 flex flex-col fixed left-0 top-0 bottom-0 z-10 hidden md:flex">
      <div className="flex items-center gap-2 mb-8">
        <Music size={30} className="text-cyan-400" />
        <h1 className="text-xl font-bold">JioMusic</h1>
      </div>
      
      <nav className="space-y-6">
        <div className="space-y-3">
          <h2 className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Menu</h2>
          <div className="space-y-2">
            <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Home size={20} />
              <span>Home</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Search size={20} />
              <span>Search</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Library size={20} />
              <span>Your Library</span>
            </Link>
          </div>
        </div>

        <div className="space-y-3">
          <h2 className="text-xs uppercase text-gray-400 font-semibold tracking-wider">Your Collection</h2>
          <div className="space-y-2">
            <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <PlusCircle size={20} />
              <span>Create Playlist</span>
            </Link>
            <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
              <Heart size={20} />
              <span>Liked Songs</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="mt-auto pt-6 border-t border-gray-800">
        <div className="space-y-3">
          <Link href="#" className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
            <User size={20} />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;