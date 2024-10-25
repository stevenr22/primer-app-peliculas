import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "./MovieCard";
//CSS
import "../components/ContextMovieCard.css"
export function ContextMovieCard() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      setMovies(data.results);
    });
  }, []);

  return (
    <ul className="container">
      {movies.map((movie) => (
        // Es importante usar una prop key única (como movie.id) para que React maneje eficientemente la lista de elementos.
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
}
