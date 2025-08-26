// // src/pages/MusicPlayer.jsx
// import SearchBar from "../search/SearchBar";
// import TrackList from "../tracks/TrackList";
// import PlayerControls from "./Controls";
// import { Link } from "react-router-dom";

// function MusicPlayer() {
//   return (
//     <div className="min-h-screen bg-gray-100 w-full mx-auto flex flex-col">
//       <header className="bg-white shadow-sm p-4">
//         <h1 className="text-2xl font-bold">Music Player</h1>

//         <button className="mt-2 bg-blue-500 text-white rounded px-1.5 py-1 hover:bg-blue-600 transition-colors duration-300">
//           <Link to="/" className="hover:underline">
//             ← Back to Home
//           </Link>
//         </button>
//       </header>

//       <main className="p-6 flex flex-col items-center w-full">
//         <SearchBar onSearch={handleSubmit} isSearching={isSearching} />
//         {/* <TrackList />
//         <PlayerControls /> */}
//       </main>

//           <footer className="fixed bottom-0 left-0 right-0 bg-black border-t p-4">
//               <p className="text-white text-center">© 2025 Music Player. All rights reserved.</p>
//               <p className="text-white text-center">Made with ❤️ by Tabitha</p>
//       </footer>
//     </div>
//   );
// }

// export default MusicPlayer;


// src/components/PlayerControls.jsx
const PlayerControls = ({ currentTrack }) => {
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={currentTrack.album.cover_small}
            alt={currentTrack.album.title}
            className="w-12 h-12 rounded"
          />
          <div>
            <h4 className="font-medium text-sm">{currentTrack.title}</h4>
            <p className="text-gray-500 text-xs">{currentTrack.artist.name}</p>
          </div>
        </div>

        <audio
          controls
          autoPlay
          className="h-8"
          onPlay={(e) => {
            // Pause other audio players
            document.querySelectorAll('audio').forEach(audio => {
              if (audio !== e.target) audio.pause();
            });
          }}
        >
          <source src={currentTrack.preview} type="audio/mpeg" />
        </audio>
      </div>
    </div>
  );
};

export default PlayerControls;