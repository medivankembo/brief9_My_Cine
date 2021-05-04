import React from "react";

function Card() {
  return (
    <div className="card text-center border border-primary shadow-0 h-50">
      <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/nature/111.jpg"
          className="img-fluid"
        />
        <a href="#!">
          <div
            className="mask"
          ></div>
        </a>
      </div>
      <div className="card-header">Featured</div>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>

        <button type="button" className="btn btn-primary">
          Button
        </button>
      </div>
    </div>
  );
}

export default Card;
