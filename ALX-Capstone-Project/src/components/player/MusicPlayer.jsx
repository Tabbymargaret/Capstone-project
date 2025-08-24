// src/pages/MusicPlayer.jsx
import SearchBar from "../search/SearchBar";
import TrackList from "../tracks/TrackList";
import PlayerControls from "./Controls";
import { Link } from "react-router-dom";

function MusicPlayer() {
  return (
    <div className="min-h-screen bg-gray-100 w-4xl">
      <header className="bg-white shadow-sm p-4">
        <h1 className="text-2xl font-bold">Music Player</h1>

        <button className="mt-2 bg-blue-500 text-white rounded px-1.5 py-1 hover:bg-blue-600 transition-colors duration-300">
          <Link to="/" className="hover:underline">
            ← Back to Home
          </Link>
        </button>
      </header>

      <main className="p-6">
        <SearchBar />
        <TrackList />
        <PlayerControls />
      </main>

          <footer className="fixed bottom-0 left-0 right-0 bg-black border-t p-4">
              <p className="text-white text-center">© 2025 Music Player. All rights reserved.</p>
              <p className="text-white text-center">Made with ❤️ by Tabitha</p>
      </footer>
    </div>
  );
}

export default MusicPlayer;
