import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages/LandingPage";
import { MovieDetails } from "../pages/MovieDetails";

export function MyRoutes() {
  return (
    <Router>
      <Routes>
        {/*PAGINA PRINCIPAL: LANDING PAGE*/}
        <Route exact path="/" element={<LandingPage />}></Route>

        {/*PAGINA DETALLE PELICULA : MOVIE DETAILS*/}
        <Route
          exact
          path="/Detalle_de_la_pelicula/:movieId"
          element={<MovieDetails />}
        ></Route>
      </Routes>
    </Router>
  );
}
