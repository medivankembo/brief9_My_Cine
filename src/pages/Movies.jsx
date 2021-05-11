import Footer from "../components/Footer";
import SectionsOfMenu from "../components/SectionsOfMenu";
import {
  nowPlayingMoviesContext,
  popularMoviesContext,
  ratedMoviesContext,
  upComingMoviesContext,
} from "../context/MoviesContext";
import { useContext } from "react";

function Movies() {
  const [popularMovies] = useContext(popularMoviesContext);
  const [ratedMovies] = useContext(ratedMoviesContext);
  const [upComingMovies] = useContext(upComingMoviesContext)
  const [nowPlayingMovies] = useContext(nowPlayingMoviesContext)
  return (
    <div>
      <SectionsOfMenu
        menuTitle="MOVIES"
        subMenuTitle1 = "Now playing"
        subMenuTitle2 = "Popular"
        subMenuTitle3 = "Upcoming"
        subMenuTitle4 = "Top rated"
        popularMovies={popularMovies}
        ratedMovies={ratedMovies}
        upComingMovies={upComingMovies}
        nowPlayingMovies={nowPlayingMovies}
      />
      <Footer />
    </div>
  );
}

export default Movies;
