import React from "react";
import useContextAPI from "../../../../Hooks/useContextAPI";
import LoadingSpinner from "../../../SharedComponent/Spinner/LoadingSpinner";
import TourCard from "../../../SharedComponent/TourCard/TourCard";
import Slide from "react-reveal/Slide";

const Tours = () => {
  const { dataLoading, tours, dataError } = useContextAPI();
  if (dataLoading) {
    <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mb-5">
      <Slide duration={1500} left>
        <h1 className="text-center mb-4 text-uppercase mt-3">Our tours</h1>
      </Slide>
      <div className="row g-4">
        {tours.map((tour, index) => (
          <TourCard key={tour._id} {...tour} index={index}></TourCard>
        ))}
      </div>
    </div>
  );
};

export default Tours;
