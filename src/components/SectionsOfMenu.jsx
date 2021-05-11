import React from "react";
import ASectionOfMenu from "./ASectionOfMenu";
import HeadOhAMenu from "./HeadOhAMenu";

function SectionsOfMenu({
  nowPlayingMovies,
  popularMovies,
  ratedMovies,
  upComingMovies,
  menuTitle,
  subMenuTitle1,
  subMenuTitle2,
  subMenuTitle3,
  subMenuTitle4,
}) {
  return (
    <div className="container">
      <HeadOhAMenu menuTitle={menuTitle} />
      <ASectionOfMenu
        className="section p-4 m-2"
        subMenuTitle={subMenuTitle1}
        data={nowPlayingMovies}
      />
      <ASectionOfMenu
        className="section p-4"
        subMenuTitle={subMenuTitle2}
        data={popularMovies}
      />
      <ASectionOfMenu
        className="section p-4"
        subMenuTitle={subMenuTitle3}
        data={upComingMovies}
      />
      <ASectionOfMenu
        className="section p-4"
        subMenuTitle={subMenuTitle4}
        data={ratedMovies}
      />
    </div>
  );
}

export default SectionsOfMenu;
