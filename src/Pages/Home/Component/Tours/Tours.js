import React from "react";
import useContextAPI from "../../../../Hooks/useContextAPI";
import LoadingSpinner from "../../../SharedComponent/Spinner/LoadingSpinner";
import TourCard from "../../../SharedComponent/TourCard/TourCard";

const Tours = () => {
  const { dataLoading, tours, dataError } = useContextAPI();
  if (dataLoading) {
    <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mb-4">
      <h1 className="text-center mb-4 text-uppercase">Our tours</h1>
      <div className="row g-4">
        {tours.map((tour) => (
          <TourCard key={tour._id} {...tour}></TourCard>
        ))}
      </div>
    </div>
  );
};

export default Tours;
