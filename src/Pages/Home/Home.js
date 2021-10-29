import React from "react";
import Navbar from "../SharedComponent/Header/Navbar";
import Banner from "./Component/Banner/Banner";
import Gallery from "./Component/Gallery/Gallery";
import Testimonial from "./Component/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      {/* <Banner></Banner> */}
      <Gallery></Gallery>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
