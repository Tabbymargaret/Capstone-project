
// src/components/PlayerControls.jsx
const PlayerControls = ({ currentTrack }) => {
  if (!currentTrack) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 shadow-lg ">
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

