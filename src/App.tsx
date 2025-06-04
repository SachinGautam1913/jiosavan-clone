import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MusicPlayer from './components/MusicPlayer';
import HomePage from './components/HomePage';

function App() {
  const [currentSong, setCurrentSong] = useState<{
    title: string;
    artist: string;
    cover: string;
    duration: number;
  } | null>({
    title: "Electric Dreams",
    artist: "Neon Pulse",
    cover: "https://images.pexels.com/photos/1816714/pexels-photo-1816714.jpeg?auto=compress&cs=tinysrgb&w=600",
    duration: 225 // 3:45 in seconds
  });

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <Header />
      
      {/* Main content */}
      <main className="md:ml-60 pt-16 pb-24">
        <HomePage />
      </main>
      
      <MusicPlayer currentSong={currentSong} />
    </div>
  );
}

export default App;