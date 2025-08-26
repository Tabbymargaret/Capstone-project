// const BASE_URL = "https://developers.deezer.com/api";

// export async function searchSongs(query) {
//   const response = await fetch(
//     `${BASE_URL}/search?q=${encodeURIComponent(query)}`
//   );
//   const data = await response.json();
//   if (!response.ok) {
//     throw new Error(`Error: ${response.statusText}`);
//   } else console.log("Fetched search results:", data);
//   return data.data;
// }

// src/utils/api.js
export const searchSongs = async (query) => {
  try {
    // Using JSONP method to avoid CORS issues
    return new Promise((resolve, reject) => {
      const callbackName = `jsonp_callback_${Date.now()}`;
      const script = document.createElement('script');
      
      window[callbackName] = (data) => {
        delete window[callbackName];
        document.body.removeChild(script);
        console.log('API response:', data);
        resolve(data.data || []);
      };

      script.onerror = () => {
        delete window[callbackName];
        document.body.removeChild(script);
        reject(new Error('Failed to search. Please try again.'));
      };

      script.src = `https://api.deezer.com/search?q=${encodeURIComponent(query)}&output=jsonp&callback=${callbackName}`;
      document.body.appendChild(script);
    });
  } catch (error) {
    console.error('Search error:', error);
    throw new Error('Failed to search songs');
  }
};