/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movie-detail">
      <h2>{movie.title}</h2>
      <img src={movie.poster} alt={movie.title} />
      <p>{movie.synopsis}</p>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
      <div>
        <h3>Reviews</h3>
        {movie.reviews.map((review, index) => (
          <p key={index}>{review}</p>
        ))}
      </div>
    </div>
  );
};

export default MovieDetail;
