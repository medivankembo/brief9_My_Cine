import React from "react";
import PresentationOfMenu from "../components/PresentationOfMenu";
import SubMenuList from "../components/SubMenuList";
import TitleOfMenu from "../components/TitleOfMenu";

function TvShow() {
  return (
    <div>
      <TitleOfMenu title="TV SHOW" />
      <PresentationOfMenu />
      <SubMenuList />
    </div>
  );
}
export default TvShow;
