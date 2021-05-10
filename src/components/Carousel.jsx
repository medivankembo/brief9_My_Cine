import React from "react";

function Carousel() {
  return (
    <div
      id="carouselDarkVariant"
      className="container carousel slide carousel-fade carousel-dark pt-5"
      data-mdb-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide-to="1"
          aria-label="Slide 1"
        ></button>
        <button
          data-mdb-target="#carouselDarkVariant"
          data-mdb-slide-to="2"
          aria-label="Slide 1"
        ></button>
      </div>

      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(19).jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Film Title</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus rem nisi ratione
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(35).jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Film Title</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus rem nisi ratione
            </p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(40).jpg"
            className="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Film Title</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus rem nisi ratione
            </p>
          </div>
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-mdb-target="#carouselDarkVariant"
        data-mdb-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-mdb-target="#carouselDarkVariant"
        data-mdb-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
