import rollo from "../img/rollo.png";
export function getMovieImg(path, width) {
    //FRAGMENTO LA URL DE LA IMAGEN
  return path ? `https://image.tmdb.org/t/p/w${width}${path}` : rollo;
}

