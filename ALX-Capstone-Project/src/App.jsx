// // src/App.jsx
// import { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import TrackList from './components/TrackList';
// import PlayerControls from './components/PlayerControls';
// import { searchSongs } from './utils/api';

// function App() {
//   const [tracks, setTracks] = useState([]);
//   const [currentTrack, setCurrentTrack] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState('');

//   const handleSearch = async (query) => {
//     setIsLoading(true);
//     setError('');
//     setCurrentTrack(null);
    
//     try {
//       const results = await searchSongs(query);
//       setTracks(results);
//     } catch (err) {
//       setError(err.message);
//       setTracks([]);
//     }
    
//     setIsLoading(false);
//   };

//   const handleTrackSelect = (track) => {
//     setCurrentTrack(track);
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-gray-800 mb-2">🎵 Music Player</h1>
//           <p className="text-gray-600">Search and play music from Deezer</p>
//         </div>

//         <SearchBar onSearch={handleSearch} isLoading={isLoading} />

//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
//             {error}
//           </div>
//         )}

//         {isLoading ? (
//           <div className="text-center py-12">
//             <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
//             <p className="text-gray-600">Searching...</p>
//           </div>
//         ) : (
//           <TrackList tracks={tracks} onTrackSelect={handleTrackSelect} />
//         )}

//         <PlayerControls currentTrack={currentTrack} />
//       </div>
//     </div>
//   );
// }

// export default App;


// src/App.jsx
import { useState } from 'react';
import SearchBar from './components/search/SearchBar';
import TrackList from './components/tracks/TrackList';
import PlayerControls from './components/player/MusicPlayer';
import { searchSongs } from './utils/deezerAPI';

function App() {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (query) => {
    setIsLoading(true);
    setError('');
    setCurrentTrack(null);
    
    try {
      const results = await searchSongs(query);
      setTracks(results);
    } catch (err) {
      setError(err.message);
      setTracks([]);
    }
    
    setIsLoading(false);
  };

  const handleTrackSelect = (track) => {
    setCurrentTrack(track);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 p-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">🎵 Music Player</h1>
          <p className="text-gray-600">Search and play music from Deezer</p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg mb-6 text-center">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <p className="text-gray-600">Searching...</p>
          </div>
        ) : (
          <TrackList tracks={tracks} onTrackSelect={handleTrackSelect} />
        )}

        <PlayerControls currentTrack={currentTrack} />
      </div>
    </div>
  );
}

export default App;