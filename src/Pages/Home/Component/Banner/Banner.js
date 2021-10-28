import React from "react";

const Banner = () => {
  return (
    <div className="banner_container">
      {/* <h1>Let's see the world together !</h1>
      <h3>keep the world in your hand.</h3>
      <p>Best places for your next travel are here check them out.</p>
      <button>See availabe tour</button> */}
      <div className="video_banner_container">
        {/* <!-- Carousel wrapper --> */}
        <div
          id="carouselVideoExample"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          {/* <!-- Indicators --> */}
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselVideoExample"
              data-bs-slide-to="0"
              class="active"
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
          </div>

          {/* <!-- Inner --> */}
          <div class="carousel-inner">
            {/* <!-- Single item --> */}
            <div class="carousel-item active" data-bs-interval="5000">
              <video class="img-fluid" autoPlay loop muted>
                <source
                  src="https://mdbootstrap.com/img/video/Tropical.mp4"
                  type="video/mp4"
                />
              </video>
              <div class="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div class="carousel-item" data-bs-interval="5000">
              <video class="img-fluid" autoPlay loop muted>
                <source
                  src="https://mdbootstrap.com/img/video/forest.mp4"
                  type="video/mp4"
                />
              </video>
              <div class="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>

            {/* <!-- Single item --> */}
            <div class="carousel-item" data-bs-interval="5000">
              <video class="img-fluid" autoPlay loop muted>
                <source
                  src="https://mdbootstrap.com/img/video/Agua-natural.mp4"
                  type="video/mp4"
                />
              </video>
              <div class="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Inner --> */}

          {/* <!-- Controls --> */}
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        {/* <!-- Carousel wrapper --> */}
      </div>
    </div>
  );
};

export default Banner;
