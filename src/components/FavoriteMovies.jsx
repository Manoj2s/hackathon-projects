/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const FavoriteMovies = ({ favorites, onSelectMovie, onToggleFavorite }) => {
  return (
    <div className="favorite-movies">
      <h3>Favorite Movies</h3>
      {favorites.map(movie => (
        <div key={movie.id} className="favorite-movie-item">
          <span onClick={() => onSelectMovie(movie)}>{movie.title}</span>
          <button onClick={() => onToggleFavorite(movie)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default FavoriteMovies;
