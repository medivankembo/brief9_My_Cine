import React from "react";
import ASectionOfMenu from "./ASectionOfMenu";

function SectionsOfMenu() {
  return (
    <div className="container">
      <ASectionOfMenu className="section p-4" title="Now playing" message= "The Most searched of the moment"/>
      <ASectionOfMenu className="section p-4" title="Popular" message= "Most popular"/>
      <ASectionOfMenu className="section p-4" title="Top rated" message= "Most rated"/>
      <ASectionOfMenu className="section p-4" title="Kids" message= "That can interest children"/>
      <ASectionOfMenu className="section p-4" title="News" message= "Get important informations about the cinema world"/>     
    </div>
  );
}

export default SectionsOfMenu;
