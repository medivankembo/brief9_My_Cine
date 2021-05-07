import React from "react";
import PresentationOfMenu from "../components/Carousel";
import SectionsOfMenu from "../components/SectionsOfMenu";
import SubMenuList from "../components/SubMenuList";
import TitleOfMenu from "../components/TitleOfMenu";

function Series() {
    return (
        <div>
          <TitleOfMenu title="SERIES" />
          <PresentationOfMenu />
          <SubMenuList />
          <SectionsOfMenu />
        </div>
      );
}

export default Series;
