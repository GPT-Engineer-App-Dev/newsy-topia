import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center mb-8">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search stories..."
        className="flex-grow bg-gray-800 text-white border border-gray-700 rounded-l-md py-2 px-4 focus:outline-none focus:border-purple-500"
      />
      <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-r-md hover:bg-purple-700 transition-colors">
        <Search className="h-5 w-5" />
      </button>
    </form>
  );
};

export default SearchBar;