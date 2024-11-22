import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import Footer from "./Footer";

const MoviesGrid = () => {
  //Start =====================================================================
  const [movies, setMovies] = useState([]);
  //Fetching data using useEffect
  useEffect(() => {
    fetch("movies.json")
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error("Error fetching movies", error));
  }, []);

  //End Fetch   ============================================================
  

  //Start Filter   ============================================================
  //To Add a filter we need to used another useState
  const [searchTerm, setSearchTerm] = useState("");

  //Adding Filter Function [Search Filter]
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filterMovies = movies.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  //End Fiter   ===================================================================

  return (
    <>
      <div className="main pt-10">
        <div className="header container mx-auto">
          <h1 className="text-white text-center text-6xl font-black">
            Movie <span className="text-red-500">Home</span>
          </h1>
        </div>
        <div className="container mx-auto pt-10">
          <input
            type="text"
            placeholder="Search Movie ..."
            className="input input-bordered w-full max-w-100 rounded-full"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="container mx-auto mt-10 grid lg:grid-cols-5 sm:grid-cols-2 gap-4 pb-10">
          {filterMovies.map((movie, index) => {
            return <MovieCard movie={movie} key={index} />;
          })}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default MoviesGrid;
