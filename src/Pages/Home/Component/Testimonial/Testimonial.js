import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import Fade from "react-reveal/Fade";
import data from "./sliderData";
console.log(data);

const Testimonial = () => {
  const [slideData, setSlideData] = useState(data);

  return (
    <div className="testimonial_content_container py-4 my-5">
      <div className="testimonial_container container mt-5">
        <div className="text-center mb-4">
          <Fade duration={1500} left>
            <h6 className="text-white text-capitalize">
              what people say about us
            </h6>
          </Fade>
          <Fade duration={1500} right>
            <h1 className="text-white">Testimonial</h1>
          </Fade>
        </div>
        <div
          style={{ maxWidth: "600px", minHeight: "370px" }}
          className="mx-auto custom_slider p-4 border-rounded"
        >
          <div
            id="carouselExampleInterval"
            className="carousel slide carousel-dark"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active custome_slider_item"
                data-bs-interval="3000"
              >
                <img
                  src={slideData[0].image}
                  className="d-block mx-auto custom_img"
                  alt={slideData[0].name}
                />
                <div className="text-center">
                  <h4 className="my-3 text-light">{slideData[0].name}</h4>
                  <p className="p-3 custom_slider_p text-white custome_quote">
                    {slideData[0].text}
                  </p>
                </div>
              </div>
              <div
                className="carousel-item custome_slider_item"
                data-bs-interval="3000"
              >
                <img
                  src={slideData[1].image}
                  className="d-block mx-auto custom_img"
                  alt={slideData[1].name}
                />
                <div className="text-center">
                  <h4 className="my-3 text-light">{slideData[1].name}</h4>
                  <p className="p-3 custom_slider_p text-white custome_quote">
                    {slideData[1].text}
                  </p>
                </div>
              </div>
              <div
                className="carousel-item custome_slider_item"
                data-bs-interval="3000"
              >
                <img
                  src={slideData[2].image}
                  className="d-block mx-auto custom_img"
                  alt={slideData[2].name}
                />
                <div className="text-center">
                  <h4 className="my-3 text-light">{slideData[2].name}</h4>
                  <p className="p-3 custom_slider_p text-white custome_quote">
                    {slideData[2].text}
                  </p>
                </div>
              </div>
            </div>
            {/* <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon fw-bold"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleInterval"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon fw-bold"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
