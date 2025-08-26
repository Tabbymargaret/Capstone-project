// // // src/components/SearchBar.jsx
// // import { useState } from "react";

// // const SearchBar = ({ onSearch }) => {
// //   const [query, setQuery] = useState("");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     if (!query.trim()) return;

// //     onSearch(query);
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="mb-8 ">
// //       <div className="flex gap-2 max-w-md mx-auto">
// //         <input
// //           type="text"
// //           value={query}
// //           onChange={(e) => setQuery(e.target.value)}
// //           placeholder="Search for a song..."
// //           className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
// //         />
// //         <button
// //           type="submit"
// //           className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
// //         >
// //           Search
// //         </button>
// //       </div>
// //     </form>
// //   );
// // };

// // export default SearchBar;


// import { form } from "framer-motion/client";
// import { useState } from "react";
// import { Form } from "react-router-dom";

// function SearchBar({ onSearch, isSearching })
// {
//   const [query, setQuery] = useState("");

//   const handleSubmit = (e) =>
//   {
//     e.preventDefault();
//     alert(`Searching for: ${query}`);
//     setQuery("");
//     onSearch(query);
//     isSearching(true)
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <input
//           type="text"
//           value={query}
//           onChange={(e) => setQuery(e.target.value)}
//           placeholder="Search for a song..."
//           required
//           className="border h-8 border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//         <button
//           type="submit"
//           className="bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 ml-2"
//         >{isSearching ? "Searching..." : "Search"}</button>
//       </div>
//       <h1>{query}</h1>
//     </form>
//   );
// }

// export default SearchBar;

// src/components/SearchBar.jsx
import { useState } from 'react';

const SearchBar = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query.trim());
    }
  };

  const handleClear = () => {
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, artists, or albums..."
          className="w-full px-6 py-4 pr-20 rounded-full border border-gray-300 
                   focus:outline-none focus:ring-4 focus:ring-blue-200 
                   focus:border-blue-400 text-lg shadow-lg"
          disabled={isLoading}
        />
        
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 
                     text-gray-400 hover:text-gray-600 p-2"
          >
            ✕
          </button>
        )}
        
        <button
          type="submit"
          disabled={!query.trim() || isLoading}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 
                   bg-blue-500 text-white px-6 py-2 rounded-full 
                   hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isLoading ? '...' : 'Search'}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;