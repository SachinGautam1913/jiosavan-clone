import React from 'react';
import { Play } from 'lucide-react';

interface MusicCardProps {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  type: 'album' | 'playlist' | 'artist';
  isRounded?: boolean;
}

const MusicCard: React.FC<MusicCardProps> = ({ 
  id, 
  title, 
  subtitle, 
  imageUrl, 
  type,
  isRounded = false
}) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative mb-3">
        <img 
          src={imageUrl} 
          alt={title} 
          className={`w-full aspect-square object-cover shadow-lg ${
            isRounded ? 'rounded-full' : 'rounded-md'
          }`}
        />
        <div className={`absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center ${
          isRounded ? 'rounded-full' : 'rounded-md'
        }`}>
          <button className="bg-cyan-500 rounded-full p-3 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            <Play size={20} className="text-white" />
          </button>
        </div>
      </div>
      <h3 className="text-white font-medium text-sm truncate">{title}</h3>
      <p className="text-gray-400 text-xs truncate">{subtitle}</p>
    </div>
  );
};

export default MusicCard;