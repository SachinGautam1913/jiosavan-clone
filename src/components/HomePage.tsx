import React from 'react';
import MusicCard from './MusicCard';
import { ChevronRight } from 'lucide-react';
import { musicData } from '../data/musicData';

const HomePage: React.FC = () => {
  return (
    <div className="px-4 py-6 md:px-8 md:py-8">
      {/* Hero section */}
      <div className="mb-8 relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-purple-900/50"></div>
        <div className="relative z-10 p-6 md:p-10 flex flex-col md:flex-row items-center">
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Discover, Stream, and Share
            </h1>
            <p className="text-gray-200 text-lg md:text-xl mb-6 max-w-xl">
              Listen to the best new releases and your favorite tracks. Discover new music every day.
            </p>
            <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Start Listening
            </button>
          </div>
          <div className="mt-8 md:mt-0">
            <img 
              src="https://images.pexels.com/photos/1389429/pexels-photo-1389429.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="Music Hero" 
              className="w-64 h-64 rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Featured playlists */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Featured Playlists</h2>
          <button className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm">See all</span>
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {musicData.featuredPlaylists.slice(0, 6).map((playlist) => (
            <MusicCard 
              key={playlist.id}
              id={playlist.id}
              title={playlist.title}
              subtitle={`${playlist.songs} songs`}
              imageUrl={playlist.cover}
              type="playlist"
            />
          ))}
        </div>
      </section>

      {/* New releases */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">New Releases</h2>
          <button className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm">See all</span>
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {musicData.newReleases.slice(0, 6).map((album) => (
            <MusicCard 
              key={album.id}
              id={album.id}
              title={album.title}
              subtitle={album.artist}
              imageUrl={album.cover}
              type="album"
            />
          ))}
        </div>
      </section>

      {/* Popular artists */}
      <section className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Popular Artists</h2>
          <button className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm">See all</span>
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {musicData.popularArtists.slice(0, 6).map((artist) => (
            <MusicCard 
              key={artist.id}
              id={artist.id}
              title={artist.name}
              subtitle={`${artist.followers} followers`}
              imageUrl={artist.image}
              type="artist"
              isRounded={true}
            />
          ))}
        </div>
      </section>

      {/* Charts */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-white">Top Charts</h2>
          <button className="flex items-center text-gray-400 hover:text-white transition-colors">
            <span className="text-sm">See all</span>
            <ChevronRight size={16} />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {musicData.charts.slice(0, 3).map((chart) => (
            <div key={chart.id} className="bg-gray-800 bg-opacity-60 p-4 rounded-lg hover:bg-gray-700 transition-colors">
              <h3 className="text-white font-semibold mb-3">{chart.title}</h3>
              <div className="space-y-2">
                {chart.songs.slice(0, 4).map((song, index) => (
                  <div key={index} className="flex items-center p-2 hover:bg-gray-700 rounded transition-colors">
                    <span className="text-gray-400 w-6 text-center">{index + 1}</span>
                    <img src={song.cover} alt={song.title} className="w-10 h-10 rounded mx-3" />
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white text-sm font-medium truncate">{song.title}</h4>
                      <p className="text-gray-400 text-xs truncate">{song.artist}</p>
                    </div>
                    <span className="text-gray-400 text-xs">{song.duration}</span>
                  </div>
                ))}
                <button className="text-cyan-400 text-sm mt-2 hover:text-cyan-300 transition-colors">
                  See more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default HomePage;