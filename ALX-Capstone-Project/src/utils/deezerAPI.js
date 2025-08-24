// const deezer_BASE_URL = "https://api.deezer.com";

// export const getArtist = async (id) => {
//   const response = await fetch(`${deezer_BASE_URL}/artist/${id}`);
//   if (!response.ok) {
//     throw new Error("Failed to fetch artist");
//   }
//   return response.json();
// };

// export const getSong = async (id) => {
//     const response = await fetch(`${deezer_BASE_URL}/track/${id}`);
//     if (!response.ok) {
//         throw new Error("Failed to fetch song");
//     }
//     return response.json();
// };


// src/utils/api.js
export const searchSong = async (query) => {
  try {
    const response = await fetch(
      `https://api.deezer.com/search?q=${encodeURIComponent(query)}`
    );
    
    if (!response.ok) throw new Error('Search failed');
    
    const data = await response.json();
    return data.data || []; // Returns array of songs
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};