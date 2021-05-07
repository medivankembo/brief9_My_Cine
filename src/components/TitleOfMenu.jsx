import React from "react";

function TitleOfMenu({ title }) {
  return (
    <div className="container h2 text-white pt-5">
      <div className="row">
        <div className="col-12 text-center">{title}</div>
      </div>
    </div>
  );
}

export default TitleOfMenu;
