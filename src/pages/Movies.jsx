import Footer from "../components/Footer";
import SectionsOfMenu from "../components/SectionsOfMenu";
import { MoviesContext } from "../context/MoviesContext";
import { useContext } from "react";

function Movies() {
  const [movies, setMovies] = useContext(MoviesContext)
  return (
    <div>
      <SectionsOfMenu menuTitle = "MOVIES" popularmovies={movies} />

      <Footer />
    </div>
  );
}

export default Movies;
