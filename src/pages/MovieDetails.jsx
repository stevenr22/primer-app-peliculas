//ESTA ES EL API CON LA INFORMACION
import { useParams } from "react-router-dom";
import { get } from "../data/httpClient";
import { useEffect, useState } from "react";
import { getMovieImg } from "../utils/getMovieImg";
export function MovieDetails() {
  //SE USA USE PARAMS PARA CAPTURAR O RESCATAS
  //DE LO QUE SE ENVIA EN LA RUTA EN ESTE CASO
  //SE ENVIA movieId
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    get("/movie/" + movieId).then((data) => {
      setMovie(data);
    });
  }, [movieId]);
  const imageUrl = getMovieImg(movie.poster_path, 500);

  return (
    <div className="container">
      <h1>DETALLE PELICULA SELECCIONADA</h1><br />
      <img src={imageUrl} alt={movie.title} />
      <div>
        <p>
            <strong>Title:</strong>
            {movie.title}
        </p>
      </div>
    </div>
  );
}
