import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import './MovieHeader.css';

const MovieHeader = () => (
  <div className="MovieHeader">
    <div className='header-content'>
      <h1>Welcome...</h1>
      <h3>Millions of movies, TV shows and people to discover. Explore now.
      </h3>
      <SearchBar />
    </div>
  </div>
);


export default MovieHeader;
