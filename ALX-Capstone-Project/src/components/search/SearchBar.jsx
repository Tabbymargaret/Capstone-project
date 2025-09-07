// src/components/SearchBar.jsx
import { useState } from 'react';
import './SearchBar.css';

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
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mb-8"
    >
      <div className="relative justify-self-center ">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, artists, or albums..."
          className=" w-[1000px] px-6 py-4 pr-20 rounded-[5px] border border-gray-300 h-[50px] 
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
                   bg-blue-500 text-black px-3 py-2 rounded-[2px]
                   hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed"
        >
          {isLoading ? "..." : "Search"}
        </button>
      </div>
    </form>
  );
};

export default SearchBar;