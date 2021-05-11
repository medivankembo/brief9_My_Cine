import React from "react";

function Card({title, srcImage}) {
  return (
    <div
      className="card text-center border border-primary shadow-0 m-3 hover-zoom"
      data-mdb-toggle="animation"
      data-mdb-animation-reset="true"
      data-mdb-animation="slide-out-right"
    >
      <div
        className="bg-image hover-overlay ripple"
        data-mdb-ripple-color="ligth"
      >
        <img
          src={srcImage}
          className="img-fluid"
        />
        <a href="#!">
          <div className="mask"></div>
        </a>
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <button type="button" className="btn btn-primary">
          MORE
        </button>
      </div>
    </div>
  );
}

export default Card;
