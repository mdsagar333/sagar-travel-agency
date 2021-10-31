import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner_container">
      {/* banner text info */}
      <div className="banner_text_info_container p-4 d-flex justify-content-center align-items-center">
        <div className="banner_text_wrapper">
          <h1 className="text-light">Let's see the world together !</h1>
          <h3 className="text-light">keep the world in your hand.</h3>
          <p className="text-light">
            Best places for your next travel are here check them out.
          </p>
          <Link className="btn text-uppercase fw-bold btn-danger mt-3">
            See availabe tour
          </Link>
        </div>
      </div>
      {/* end of {/* banner text info */}
      <div className="video_banner_container">
        {/* <!-- Carousel wrapper --> */}
        <div
          id="carouselVideoExample"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          {/* <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselVideoExample"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselVideoExample"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselVideoExample"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div> */}

          {/* <!-- Inner --> */}
          <div className="carousel-inner">
            {/* <!-- Single item --> */}
            <div className="carousel-item active" data-bs-interval="5000">
              <video className="img-fluid" autoPlay loop muted>
                <source
                  src="https://mdbootstrap.com/img/video/Tropical.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" data-bs-interval="5000">
              <video className="img-fluid" autoPlay loop muted>
                <source
                  src="https://mdbootstrap.com/img/video/forest.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            {/* <!-- Single item --> */}
            <div className="carousel-item" data-bs-interval="5000">
              <video className="img-fluid" autoPlay loop muted>
                <source
                  src="https://mdbootstrap.com/img/video/Agua-natural.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          {/* <!-- Inner --> */}

          {/* <!-- Controls --> */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- Carousel wrapper --> */}
      </div>
    </div>
  );
};

export default Banner;
