import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import SubMenuTitle from "./SubMenuTitle";

function ASectionOfMenu({ data, subMenuTitle, className, linkShowDetail}) {
  return (
    <div className="container">
      <div className={className}>
        <div className="row">
          <SubMenuTitle subMenuTitle={subMenuTitle} />
        </div>
        <div className="row">
          {data
            ? data.map((movie) => {
                return (
                  <div className="col-sm-12 col-md-3">
                    <Card
                      title={movie.title}
                      srcImage={
                        "https://image.tmdb.org/t/p/original" +
                        movie.poster_path
                      }
                      linkShowDetail={linkShowDetail}
                    />
                  </div>
                );
              })
            : " "}
        </div>
        <Pagination />
      </div>
    </div>
  );
}

export default ASectionOfMenu;
