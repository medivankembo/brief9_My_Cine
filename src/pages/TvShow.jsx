import React from "react";
import PresentationOfMenu from "../components/Carousel";
import SectionsOfMenu from "../components/SectionsOfMenu";
import SubMenuList from "../components/SubMenuList";
import TitleOfMenu from "../components/TitleOfMenu";

function TvShow() {
  return (
    <div>
      <TitleOfMenu title="TV SHOW" />
      <PresentationOfMenu />
      <SubMenuList />
      <SectionsOfMenu />
    </div>
  );
}
export default TvShow;
