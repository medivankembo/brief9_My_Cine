import React from "react";
import PresentationOfMenu from "../components/PresentationOfMenu";
import SubMenuList from "../components/SubMenuList";
import TitleOfMenu from "../components/TitleOfMenu";

function Movies() {
  return (
    <div>
      <TitleOfMenu title="MOVIES" />
      <PresentationOfMenu />
      <SubMenuList />
    </div>
  );
}

export default Movies;
