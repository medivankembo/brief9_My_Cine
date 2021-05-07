import React from "react";
import Card from "./Card";
import SubMenuTitle from "./SubMenuTitle";

function ASectionOfMenu({ movies, subMenuTitle, message, className }) {
  console.log(movies);
  return (
    <div className="container-fluid">
      <div className={className}>
        <div className="row">
          <SubMenuTitle subMenuTitle={subMenuTitle} message={message} />
        </div>
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <Card />
          </div>
          <div className="col-sm-12 col-md-3">
            <Card />
          </div>
          <div className="col-sm-12 col-md-3">
            <Card />
          </div>
          <div className="col-sm-12 col-md-3">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ASectionOfMenu;
