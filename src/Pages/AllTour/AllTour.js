import React from "react";
import useContextAPI from "../../Hooks/useContextAPI";
import LoadingSpinner from "../SharedComponent/Spinner/LoadingSpinner";
import TourCard from "../SharedComponent/TourCard/TourCard";
import Slide from "react-reveal/Slide";

function AllTour() {
  const { tours, dataLoading } = useContextAPI();

  if (dataLoading) {
    <LoadingSpinner></LoadingSpinner>;
  }
  return (
    <div className="container mb-5">
      <Slide duration={1200} top>
        <h1 className="text-center mt-5">
          Search offers and find best tour for you
        </h1>
      </Slide>
      <section className="tour_contianer my-5">
        <div className="row">
          {tours.map((tour) => (
            <TourCard key={tour._id} {...tour} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default AllTour;
