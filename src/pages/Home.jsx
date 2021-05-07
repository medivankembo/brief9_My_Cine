import React from "react";
import SubMenuList from "../components/SubMenuList";
import TitleOfMenu from "../components/TitleOfMenu";
import PresentationOfMenu from "../components/Carousel";
import Footer from "../components/Footer";
import SectionsOfMenu from "../components/SectionsOfMenu";

function Home() {
  return (
    <div className="home">
      <PresentationOfMenu />
      <Footer />
    </div>
  );
}

export default Home;
