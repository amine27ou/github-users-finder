import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import SearchResult from './components/searchResult';

export default function App() {
  const [query, getQuery] = useState('');
  return (
    <div className='app'
    >
                <SearchBar getQuery={(query) => getQuery(query)} />
                <SearchResult username={query} />
      </div>
  );
}
