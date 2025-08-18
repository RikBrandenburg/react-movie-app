import React from 'react';

const MovieDetails = ({ movie, onBack }) => {
  return (
    <div className='wrapper'>
      <button onClick={onBack} className='mb-4 text-blue-500'>
        ⬅ Back
      </button>

      <header>
        <h2 className='text-2xl font-bold'>{movie.title}</h2>
        <img
          className='my-4'
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : '/no-movie.png'
          }
          alt={movie.title}
        />
      </header>

      <div className='text-white'>
        <p>
          <strong>Release Date:</strong> {movie.release_date || 'N/A'}
        </p>
        <p>
          <strong>Language:</strong> {movie.original_language}
        </p>
        <p>
          <strong>Rating:</strong> {movie.vote_average}
        </p>
        <p>
          <strong>Votes:</strong> {movie.vote_count}
        </p>
        <p>
          <strong>Popularity:</strong> {movie.popularity}
        </p>
        <p>
          <strong>Overview:</strong> {movie.overview}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
