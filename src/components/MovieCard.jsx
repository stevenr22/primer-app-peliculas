import "../components/MovieCard.css";
//SE IMPORTA ROUTER DOM PORQUE SE VA A MANIPULAR EL DOM COMO TAL
import { Link } from "react-router-dom";

export function MovieCard(props) {
  const imageUrl = "https://image.tmdb.org/t/p/w300" + props.movie.poster_path;
  return (
    <li className="movieCard">
      {/*LA ETIQUETA LINK ES LA USADA AL IMPORTAR CON EL FIN DE QUE
      CADA IMGEN DE LA API, AL PRESIONAR ME LLEVE A OTRO COMPONENTE
      MOVIE DETAILS EN ESTE CASO LLAMADO LA PAGINA LLAMA MOVIDEDETAILS
      ADICIONALMENTE SE ENVIA EL ID DE LA PELICULA DEL PROPS */}
      <Link to={"/Detalle_de_la_pelicula/" + props.movie.id}>
        <img
          className="movieImage"
          width={230}
          height={345}
          src={imageUrl}
          alt={props.movie.title}
        />
      </Link>
    </li>
  );
}
