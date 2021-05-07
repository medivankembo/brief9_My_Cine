import React, { useContext } from "react";
import ASectionOfMenu from "../components/ASectionOfMenu";
import Footer from "../components/Footer";
import PresentationOfMenu from "../components/Carousel";
import SectionsOfMenu from "../components/SectionsOfMenu";
import SubMenuList from "../components/SubMenuList";
import TitleOfMenu from "../components/TitleOfMenu";
import { MoviesContext } from "../context/MoviesContext";
import HeadOhAMenu from "../components/HeadOhAMenu";

function Movies() {
  const [movies, setMovies] = useContext(MoviesContext)

  return (
    <div>
      <HeadOhAMenu menuTitle = "MOVIES"/>
      <SectionsOfMenu />
      <Footer />
    </div>
  );
}

export default Movies;
