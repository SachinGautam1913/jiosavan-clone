import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, List, Repeat, Shuffle } from 'lucide-react';

interface MusicPlayerProps {
  currentSong: {
    title: string;
    artist: string;
    cover: string;
    duration: number;
  } | null;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ currentSong }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(80);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-800 p-3 flex flex-col z-30">
      <div className="flex items-center justify-between">
        {/* Song Info */}
        <div className="flex items-center w-1/4">
          {currentSong ? (
            <>
              <img 
                src={currentSong.cover} 
                alt={currentSong.title} 
                className="w-12 h-12 rounded mr-3"
              />
              <div className="truncate">
                <h4 className="text-white text-sm font-medium truncate">{currentSong.title}</h4>
                <p className="text-gray-400 text-xs truncate">{currentSong.artist}</p>
              </div>
            </>
          ) : (
            <div className="text-gray-400 text-sm">No song selected</div>
          )}
        </div>

        {/* Player Controls */}
        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center gap-4 mb-1">
            <button className="text-gray-400 hover:text-white transition-colors">
              <Shuffle size={18} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipBack size={20} />
            </button>
            <button 
              className="bg-white rounded-full p-2 text-gray-900 hover:bg-gray-200 transition-colors"
              onClick={togglePlay}
            >
              {isPlaying ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <SkipForward size={20} />
            </button>
            <button className="text-gray-400 hover:text-white transition-colors">
              <Repeat size={18} />
            </button>
          </div>
          
          <div className="flex items-center w-full gap-2">
            <span className="text-xs text-gray-400 w-8 text-right">
              {formatTime(currentTime)}
            </span>
            <div className="w-full bg-gray-700 rounded-full h-1 group">
              <div 
                className="bg-cyan-400 h-1 rounded-full relative"
                style={{ width: `${(currentTime / (currentSong?.duration || 1)) * 100}%` }}
              >
                <div className="absolute w-3 h-3 bg-white rounded-full -right-1.5 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
            <span className="text-xs text-gray-400 w-8">
              {currentSong ? formatTime(currentSong.duration) : '0:00'}
            </span>
          </div>
        </div>

        {/* Volume Controls */}
        <div className="flex items-center justify-end gap-3 w-1/4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <List size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Volume2 size={18} className="text-gray-400" />
            <div className="w-24 bg-gray-700 rounded-full h-1 group">
              <div 
                className="bg-cyan-400 h-1 rounded-full relative"
                style={{ width: `${volume}%` }}
              >
                <div className="absolute w-3 h-3 bg-white rounded-full -right-1.5 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;