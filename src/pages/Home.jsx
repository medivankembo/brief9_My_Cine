import React from "react";
import SubMenuList from "../components/SubMenuList";
import TitleOfMenu from "../components/TitleOfMenu";
import PresentationOfMenu from "../components/PresentationOfMenu";
import SectionOfMenu from "../components/SectionOfMenu";

function Home() {
  return (
    <div>
      <TitleOfMenu title="HOME" />
      <PresentationOfMenu />
      <SubMenuList />
      <SectionOfMenu />
    </div>
  );
}

export default Home;
