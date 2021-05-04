import React from "react";
import Card from "./Card";

function SectionOfMenu() {
  return (
    <div className="container-fluid bg-light">
        <div className="row">
        <div className="col-sm-12 col-md-6 mb-3">
          <Card />
        </div>
        <div className="col-sm-12 col-md-3 mb-3">
          <Card />
        </div>
        <div className="col-sm-12 col-md-3 mb-3">
          <Card />
        </div>
        <div className="col-sm-12 col-md-3 mb-3">
          <Card />
        </div>
        <div className="col-sm-12 col-md-3 mb-3">
          <Card />
        </div>
        <div className="col-sm-12 col-md-3 mb-3">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default SectionOfMenu;
