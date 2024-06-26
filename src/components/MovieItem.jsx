/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const MovieItem = ({ movie, onSelectMovie, onToggleFavorite }) => {
  return (
    <div className="movie-item">
      <img src={movie.poster} alt={movie.title} onClick={() => onSelectMovie(movie)} />
      <h3>{movie.title}</h3>
      <p>{movie.releaseDate}</p>
      <button onClick={() => onToggleFavorite(movie)}>Favorite</button>
    </div>
  );
};

export default MovieItem;
