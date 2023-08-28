import React, { useState } from 'react';

const SearchBar = ({ placeholder, onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        className="form-control text-right"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default SearchBar;
