import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';

export default function SearchBar({ getQuery }) {

  const [query, setQuery] = useState('');

  function handleChange(e) {
    setQuery(e.target.value);
  }

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim() !== '') {
      getQuery(query);
      setQuery('');
    }
  }

  return (
    <div className='search-bar'>
      <div className='input-container'>
        <CiSearch className='search-icon' />
        <input
          type='text'
          placeholder='Search Github username...'
          value={query}
          onChange={handleChange}
        />
      </div>
      <button type='button' onClick={handleSearch} className='search-btn'>
        Search
      </button>
    </div>
  );
}
