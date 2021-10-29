import React from "react";
import Navbar from "../SharedComponent/Header/Navbar";
import Banner from "./Component/Banner/Banner";
import Gallery from "./Component/Gallery/Gallery";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Gallery></Gallery>
    </div>
  );
};

export default Home;
