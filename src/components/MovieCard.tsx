import React from 'react';

interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Type: string;
  Poster: string;
}

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const placeholderPoster = 'https://i.ibb.co/XZhk6mxb/39d7f1218bab.png';

  return (
    <div
      key={movie.imdbID}
      className="bg-white/10 backdrop-blur-md rounded-lg shadow-md p-4 flex flex-col items-start transition-transform duration-300 hover:scale-105 hover:z-20 relative"
      style={{ willChange: 'transform' }}
    >
      <img
        src={movie.Poster && movie.Poster !== 'N/A' ? movie.Poster : placeholderPoster}
        alt={movie.Title}
        className="w-full h-70 object-fill rounded mb-3 border border-black/20"
      />
      <h2
        className="text-lg font-bold text-white mb-1 w-full text-left truncate"
        title={movie.Title}
      >
        {movie.Title}
      </h2>
      <div className="flex w-full justify-between items-center mb-1">
        <span className="text-gray-200 text-sm">{movie.Year}</span>
        <span className="text-red-400 text-sm capitalize">{movie.Type}</span>
      </div>
      <button
        className="mt-2 px-3 py-1 bg-red-700 text-white rounded hover:bg-red-800 text-xs font-semibold transition w-auto text-left align-self-start shadow"
        onClick={() => window.open(`/movie/${movie.imdbID}`, '_blank')}
      >
        View More
      </button>
    </div>
  );
};

export default MovieCard;
