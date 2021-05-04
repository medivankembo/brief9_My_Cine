import React from "react";
import PresentationOfMenu from "../components/PresentationOfMenu";
import SubMenuList from "../components/SubMenuList";
import TitleOfMenu from "../components/TitleOfMenu";

function Series() {
    return (
        <div>
          <TitleOfMenu title="SERIES" />
          <PresentationOfMenu />
          <SubMenuList />
        </div>
      );
}

export default Series;
