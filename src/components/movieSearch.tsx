"use client";
import React, { useState } from "react";
import Image from "next/image";
import { API_KEY, END_POINT } from "@/constants/constants";
import Pagination from "./Pagination";
import SkeletonCard from "./SkeletonCard";
import MovieCard from "./MovieCard";

const MovieSearch = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("movie");
  const [year, setYear] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async (pageNum = 1) => {
    if (!search.trim()) return;
    setLoading(true);
    setError("");
    try {
      const url = `${END_POINT}?apikey=${API_KEY}&s=${encodeURIComponent(
        search
      )}${type ? `&type=${type}` : ""}${
        year ? `&y=${year}` : ""
      }&page=${pageNum}`;
      const res = await fetch(url);
      const data = await res.json();
      if (data.Response === "True") {
        setResults(data.Search);
        setTotalResults(Number(data.totalResults));
      } else {
        setResults([]);
        setTotalResults(0);
        setError(data.Error || "No results found.");
      }
    } catch (err) {
      setError("Failed to fetch results.");
      setResults([]);
      setTotalResults(0);
    }
    setLoading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    fetchMovies(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    fetchMovies(newPage);
  };

  // Remove duplicates by imdbID
  const uniqueResults = Array.from(
    new Map(results.map((m) => [m.imdbID, m])).values()
  );

  return (
    <div className="w-full bg-gradient-to-b from-black via-[#1a1a1a] to-red-900 min-h-screen mx-auto text-center px-4 py-8">
      <div className="max-w-4xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-red-600 mb-4 drop-shadow-lg">
          Welcome to Movie Explorer
        </h1>
        <p className="text-white text-lg md:text-xl mb-6">
          Discover your next favorite movie in just a few clicks. Whether you're
          searching for a blockbuster, a classic, or something new, we make it
          easy to find the perfect film for you. Start exploring now and let
          your next adventure begin!
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="w-[95%] md:w-[75%] mx-auto bg-black/70 rounded-lg flex flex-col md:flex-row items-center gap-4 p-4 mb-8 shadow-lg transition-all border border-black-700"
      >
        <div className="relative flex-1 w-full">
          <input
            type="text"
            placeholder="Search for movies or series..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white/90 text-black rounded-md border-none focus:ring-2 focus:ring-red-600 text-lg placeholder-gray-500"
            style={{ outline: "none", boxShadow: "none" }}
          />
          <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-600 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle
                cx="11"
                cy="11"
                r="7"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
              />
              <line
                x1="16.5"
                y1="16.5"
                x2="21"
                y2="21"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
        <div className="relative flex-none w-full md:w-auto">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="appearance-none px-6 pr-10 py-3 bg-white/90 text-black rounded-md border-none focus:ring-2 focus:ring-red-600 text-lg transition-shadow duration-200 shadow-sm hover:shadow-md w-full"
            style={{ outline: "none", boxShadow: "none" }}
          >
            <option value="movie">Movie</option>
            <option value="series">Series</option>
          </select>
          <span className="pointer-events-none absolute right-2 top-1/2 transform -translate-y-1/2 text-red-600">
            <svg
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </div>
        <input
          type="number"
          min="1900"
          max={new Date().getFullYear()}
          placeholder="Year"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          className="flex-none px-4 py-3 bg-white/90 text-black rounded-md border-none focus:ring-2 focus:ring-red-600 text-lg w-full md:w-auto [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          style={{
            outline: "none",
            boxShadow: "none",
            MozAppearance: "textfield",
          }}
        />
        <button
          type="submit"
          className="flex-none bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded-md transition duration-200 text-lg flex items-center gap-2 w-full md:w-auto shadow"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="hidden md:inline lg:inline h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <line
              x1="16.5"
              y1="16.5"
              x2="21"
              y2="21"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
          <span className="w-full text-center md:w-auto md:text-left block">
            Search
          </span>
        </button>
      </form>

      {totalResults > 0 && (
        <div className="w-full text-left text-white font-medium mb-2 px-2 m-4">
          Showing {results.length > 0 ? (page - 1) * 10 + 1 : 0}
          {" - "}
          {results.length > 0 ? (page - 1) * 10 + results.length : 0}
          {" of "}
          {totalResults} results
        </div>
      )}

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-2 m-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-2 m-4">
          {uniqueResults.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </div>
      )}

      {error && (
        <div className="flex flex-col items-center justify-center text-center py-8">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 mb-4">
            <Image
              src="https://i.ibb.co/0jRmSbmd/68986726-no-film-clap-board-cinema-sign-removebg-preview.png"
              alt="No Movies"
              fill
              className="object-contain"
              priority
            />
          </div>
          <h2 className="text-grey-500 font-semibold text-lg sm:text-xl">
            No Movies Found
          </h2>
        </div>
      )}

      {totalResults > 10 && (
        <Pagination
          page={page}
          totalResults={totalResults}
          onPageChange={handlePageChange}
        />
      )}
    </div>
  );
};

export default MovieSearch;
