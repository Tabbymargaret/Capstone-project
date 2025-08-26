// import React from 'react'

// function TrackList() {
//   return (
//     <div>
//       <h2 className="text-xl font-bold mb-2">Track List</h2>
//       <ul className="list-disc pl-5">
//         <li>Track 1</li>
//         <li>Track 2</li>
//         <li>Track 3</li>
//       </ul>
//     </div>
//   )
// }

// export default TrackList


// src/components/TrackList.jsx
const TrackList = ({ tracks, onTrackSelect }) => {
  if (tracks.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <div className="text-6xl mb-4">🎵</div>
        <p>No songs found. Try a different search!</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {tracks.map((track) => (
        <div
          key={track.id}
          onClick={() => onTrackSelect(track)}
          className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg 
                   transition-shadow cursor-pointer"
        >
          <img
            src={track.album.cover_medium}
            alt={track.album.title}
            className="w-full h-48 object-cover rounded-lg mb-3"
          />
          <h3 className="font-semibold text-lg mb-1 truncate">{track.title}</h3>
          <p className="text-gray-600 text-sm mb-2">{track.artist.name}</p>
          <p className="text-gray-500 text-xs">Album: {track.album.title}</p>
          
          <div className="mt-3">
            <audio controls className="w-full h-8">
              <source src={track.preview} type="audio/mpeg" />
            </audio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrackList;