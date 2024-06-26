// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import moviesData from "./movie.json";
import "./MovieDetails.css"; // CSS file for styling

const MovieDetails = () => {
  const { id } = useParams();
  const movie = moviesData.find((movie) => movie.id === parseInt(id));

  if (!movie) {
    return <div>Movie not found</div>;
  }

  return (
    <div className="movie-details">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-details-image"
        />
      </div>
      <div>
        <h2>Title:{movie.title}</h2>
        <p>
          <strong>Release Date:</strong> {movie.release_date}
        </p>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>
        <p>
          <strong>Vote Average:</strong> {movie.vote_average}
        </p>
        <p>
          <strong>Vote Count:</strong> {movie.vote_count}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
