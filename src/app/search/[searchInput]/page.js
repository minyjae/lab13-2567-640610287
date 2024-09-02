"use client";

import  MovieRow from "@components/MovieRow";
import { movieDB } from "@lib/movieDB";

export default function SearchResultPage( {params} ) {
  const processedSearchInput = params.searchInput;
  const preResult = processedSearchInput.replaceAll("%20", " ");
  const result = preResult.toLowerCase();
  const filteredMovies = movieDB.filter((movie) => movie.title.toLowerCase().includes(result));
  return (
    <div>
      <p className="fw-bold fs-4 text-center my-0">
        Searching &quot; {preResult} &quot;
      </p>
      <p className="fw-bold fs-4 text-center">Found {filteredMovies.length} result(s)</p>
      {filteredMovies.map((movie,i) => (
        <MovieRow key={movie.id} title={movie.title} rating={movie.rating} number={i+1} id={movie.id} />
      ))}
    </div>
  );
}
