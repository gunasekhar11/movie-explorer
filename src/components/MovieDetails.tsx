"use client";
import { API_KEY, END_POINT } from "@/constants/constants";
import React, { useEffect, useState } from "react";

interface MovieDetailsProps {
  imdbID: string;
  onClose?: () => void;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ imdbID, onClose }) => {
  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true);
      setError("");
      try {
        const res = await fetch(
          `${END_POINT}?apikey=${API_KEY}&i=${imdbID}&plot=full`
        );
        const data = await res.json();
        if (data.Response === "True") {
          setMovie(data);
        } else {
          setError(data.Error || "Movie not found.");
        }
      } catch {
        setError("Failed to fetch movie details.");
      }
      setLoading(false);
    };
    fetchMovie();
  }, [imdbID]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black/95 flex items-start justify-center py-2 px-2">
        <div className="bg-[#1a1a1a] text-white rounded-lg shadow-2xl w-full p-6 md:p-12 relative flex gap-6">
          <div className="w-full md:w-60 h-80 bg-gray-700 rounded-lg" />
          <div className="flex-1 space-y-4">
            <div className="h-6 bg-gray-700 rounded w-3/4" />
            <div className="flex flex-wrap gap-2">
              <div className="h-5 w-16 bg-gray-700 rounded" />
              <div className="h-5 w-16 bg-gray-700 rounded" />
              <div className="h-5 w-20 bg-gray-700 rounded" />
            </div>
            <div className="h-24 bg-gray-700 rounded w-full" />
            <div className="space-y-2 mt-4">
              <div className="h-4 bg-gray-700 rounded w-1/2" />
              <div className="h-4 bg-gray-700 rounded w-3/5" />
              <div className="h-4 bg-gray-700 rounded w-2/3" />
              <div className="h-4 bg-gray-700 rounded w-1/3" />
              <div className="h-4 bg-gray-700 rounded w-1/4" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
        <div className="bg-black text-red-400 rounded-lg p-8 shadow-lg">
          {error}
        </div>
      </div>
    );
  }

  if (!movie) return null;

  return (
    <div className="min-h-screen bg-black/95 flex items-start justify-center py-2 px-2">
      <div className="bg-[#1a1a1a] text-white rounded-lg shadow-2xl w-full p-6 md:p-12 relative flex flex-col justify-center">
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-2xl font-bold z-10"
            aria-label="Close"
          >
            &times;
          </button>
        )}
        <div className="flex flex-col md:flex-row gap-6 h-full">
          <img
            src={
              movie.Poster && movie.Poster !== "N/A"
                ? movie.Poster
                : "https://i.ibb.co/XZhk6mxb/39d7f1218bab.png"
            }
            alt={movie.Title}
            className="w-full md:w-60 h-80 object-cover rounded-lg border border-red-900 bg-black"
          />
          <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
            <h2 className="text-2xl font-bold text-red-500 mb-2">
              {movie.Title}
            </h2>
            <div className="flex flex-wrap gap-2 text-sm mb-2">
              <span className="bg-red-900/80 px-2 py-1 rounded text-white">
                {movie.Year}
              </span>
              <span className="bg-black/60 px-2 py-1 rounded text-white">
                {movie.Type}
              </span>
              <span className="bg-black/60 px-2 py-1 rounded text-white">
                {movie.Rated}
              </span>
              <span className="bg-black/60 px-2 py-1 rounded text-white">
                {movie.Runtime}
              </span>
              <span className="bg-black/60 px-2 py-1 rounded text-white">
                {movie.Genre}
              </span>
            </div>
            <p className="text-gray-200 mb-2 border-l-4 border-red-700 pl-4 text-justify">
              {movie.Plot}
            </p>
            <div className="text-gray-400 text-sm space-y-2 mt-1">
              <div>
                <span className="font-semibold text-white">Director:</span>{" "}
                {movie.Director}
              </div>
              <div>
                <span className="font-semibold text-white">Actors:</span>{" "}
                {movie.Actors}
              </div>
              <div>
                <span className="font-semibold text-white">Language:</span>{" "}
                {movie.Language}
              </div>
              <div>
                <span className="font-semibold text-white">IMDB Rating:</span>{" "}
                {movie.imdbRating}
              </div>
              <div>
                <span className="font-semibold text-white">Awards:</span>{" "}
                {movie.Awards}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
