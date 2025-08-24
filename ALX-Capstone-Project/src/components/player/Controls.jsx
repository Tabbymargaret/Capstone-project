// src/components/player/PlayerControls.jsx
import { useState } from "react";

const PlayerControls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(70);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 max-w-md mx-auto transform transition-all duration-300 hover:shadow-xl">
      {/* Album Art with Pulse Animation */}
      <div className="text-center mb-6">
        <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center relative">
          <div
            className={`absolute inset-0 rounded-lg bg-white opacity-20 animate-pulse ${
              isPlaying ? "ping" : ""
            }`}
          ></div>
          <span className="text-white text-4xl">🎵</span>
        </div>
        <h3 className="font-semibold text-lg transition-all duration-300 hover:text-blue-600">
          Track Title
        </h3>
        <p className="text-gray-600 text-sm transition-all duration-300 hover:text-gray-800">
          Artist Name
        </p>
      </div>

      {/* Progress Bar with Animation */}
      <div className="mb-4">
        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-purple-500 h-1.5 rounded-full transition-all duration-500 ease-out"
            style={{ width: "30%" }}
          ></div>
        </div>
        <div className="flex justify-between text-xs text-gray-500">
          <span className="transition-all duration-300 hover:text-gray-700">
            1:30
          </span>
          <span className="transition-all duration-300 hover:text-gray-700">
            3:00
          </span>
        </div>
      </div>

      {/* Control Buttons with Hover Animations */}
      <div className="flex justify-center items-center space-x-6 mb-4">
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 transform hover:scale-110 hover:rotate-180">
          🔄
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 transform hover:scale-110">
          ⏮
        </button>

        {/* Play/Pause Button with Bounce Animation */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="p-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full 
                   hover:from-blue-600 hover:to-purple-600 transition-all duration-300 
                   transform hover:scale-110 shadow-md hover:shadow-lg"
        >
          {isPlaying ? "⏸" : "▶"}
        </button>

        <button className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 transform hover:scale-110">
          ⏭
        </button>
        <button className="p-2 text-gray-400 hover:text-gray-600 transition-all duration-200 transform hover:scale-110 hover:rotate-180">
          🔁
        </button>
      </div>

      {/* Volume Control with Slide Animation */}
      <div className="flex items-center space-x-3">
        <span className="text-gray-400 transition-all duration-300 hover:text-gray-600">
          🔈
        </span>
        <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-400 to-purple-400 h-1.5 rounded-full transition-all duration-300"
            style={{ width: `${volume}%` }}
          ></div>
        </div>
        <span className="text-gray-400 transition-all duration-300 hover:text-gray-600">
          🔊
        </span>
      </div>

      {/* Visualizer Animation (Optional) */}
      <div className="mt-6 flex justify-center items-end space-x-1 h-8">
        {[2, 4, 6, 8, 6, 4, 2].map((height, index) => (
          <div
            key={index}
            className="w-2 bg-gradient-to-t from-blue-400 to-purple-400 rounded-t transition-all duration-300 ease-in-out"
            style={{
              height: `${height}px`,
              animation: `pulse 1.2s ease-in-out ${
                index * 0.1
              }s infinite alternate`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PlayerControls;
