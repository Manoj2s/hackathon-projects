// eslint-disable-next-line no-unused-vars
import React from 'react';
import moviesData from './movie.json';
import MovieCard from './MovieCard';
import './MoviesList.css';  // CSS file ko import karna

const MoviesList = () => {
  return (
    <div className="movies-list">
      {moviesData.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MoviesList;
