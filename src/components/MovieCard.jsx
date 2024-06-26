/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="movie-image" />
        <h2 className="movie-title">{movie.title}</h2>
      </Link>
      
    </div>
  );
};

export default MovieCard;
