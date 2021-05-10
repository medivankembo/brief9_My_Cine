import React from "react";
import ASectionOfMenu from "./ASectionOfMenu";
import HeadOhAMenu from "./HeadOhAMenu";

function SectionsOfMenu({menuTitle,popularmovies}) {
  return (

    <div className="container">
      <HeadOhAMenu menuTitle = {menuTitle} />
      <ASectionOfMenu className="section p-4" title="Now playing" message= "The Most searched of the moment" popularmovies={popularmovies}/>
      <ASectionOfMenu className="section p-4" title="Popular" message= "Most popular" />
      <ASectionOfMenu className="section p-4" title="Top rated" message= "Most rated"/>
      <ASectionOfMenu className="section p-4" title="Kids" message= "That can interest children"/>
      <ASectionOfMenu className="section p-4" title="News" message= "Get important informations about the cinema world"/>     
    </div>
  );
}

export default SectionsOfMenu;
