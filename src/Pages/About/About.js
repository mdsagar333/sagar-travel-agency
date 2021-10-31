import React from "react";
import Slide from "react-reveal/Slide";
const About = () => {
  return (
    <div className="container py-5">
      <section className="about_top">
        <Slide duration={1000} top>
          <h2 className="text-center px-0 px-md-5 mb-5">
            We’re truely dedicated to make your travel experience as much simple
            and fun as possible!
          </h2>
        </Slide>
      </section>
      <section className="about_main mb-4">
        <div className="row g-4">
          <div className="col-12 col-md-7 col-lg-6">
            <Slide duration={1200} left>
              <h3 className="mb-5 custom_letter_spacing">
                Hi! Welcome to SA Tour & Travels
              </h3>
            </Slide>
            <Slide duration={1300} bottom>
              <p className="custom_letter_spacing">
                Bringing you a modern, comfortable, and connected travel
                experience is one of our highest priorities and that’s why we
                continuously try to improve your experience when you book
                anything with us.
              </p>
            </Slide>
            <Slide duration={1300} delay={200} bottom>
              <p className="custom_letter_spacing">
                We really appreciate and welcome any of suggstions you might
                have for us, so feel free drop us line anytime.Air conditioning,
                heating, desk, alarm clock, iPod docking station can be found in
                selected guestrooms.
              </p>
            </Slide>
          </div>
          <div className="col-12 col-md-5 col-lg-6">
            <Slide right duration={1000}>
              <img
                src="https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                alt=""
                className="img-fluid"
              />
            </Slide>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
