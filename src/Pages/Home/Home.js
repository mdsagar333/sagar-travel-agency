import React from "react";
import Navbar from "../SharedComponent/Header/Navbar";
import Banner from "./Component/Banner/Banner";
import Gallery from "./Component/Gallery/Gallery";
import Testimonial from "./Component/Testimonial/Testimonial";
import Tours from "./Component/Tours/Tours";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <Gallery></Gallery>
      <Testimonial></Testimonial>
      <Tours />
    </div>
  );
};

export default Home;
