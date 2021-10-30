import React, { useState } from "react";
import { useParams } from "react-router";
import { GrMapLocation } from "react-icons/gr";
import { BiTime, BiUserCheck, BiLocationPlus } from "react-icons/bi";
import { BsPeopleFill, BsWifi } from "react-icons/bs";
import useContextAPI from "../../Hooks/useContextAPI";
import { Link } from "react-router-dom";
import LoadingSpinner from "../SharedComponent/Spinner/LoadingSpinner";

const TourDetails = () => {
  const { tourId } = useParams();
  const { tours, dataLoading, user } = useContextAPI();
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [userName, setuserName] = useState("");
  const [useEmail, setUserEmail] = useState("");
  const [tourID, settourID] = useState("");

  if (dataLoading) {
    return <LoadingSpinner />;
  }

  const handleBookingTour = (e) => {
    e.preventDefault();
    console.log("sagar");
  };
  const tour = tours.find((tour) => tour._id === tourId);
  const {
    _id,
    country,
    duration,
    images,
    name,
    price,
    description,
    maxGroupSize,
  } = tour;

  return (
    <div className="custom_tour_details_container">
      <section className="tour_details">
        <img
          src={images}
          alt={name}
          className="img-fluid my-5 d-block w-100 detail_img"
        />
        <div className="px-3 px-md-5">
          <div className="details_container">
            <div className="row">
              <div className="col-12 col-md-9 col-lg-10">
                <h2 className="text-capitalize">
                  {duration}- day: in {name}
                </h2>
                <p className="text-capitalize mb-4">
                  <GrMapLocation className="me-2" /> {country} -{" "}
                  <Link to="https://www.google.com/maps">View on map</Link>
                </p>
                <div className="custom_details mb-4">
                  <div className="row">
                    <div className="col-6 col-md-3">
                      <p className="fw-bold">
                        <BiTime className="me-2" /> {duration} Days
                      </p>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="fw-bold">
                        <BsPeopleFill className="me-2" /> Max People:{" "}
                        {maxGroupSize}
                      </p>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="fw-bold">
                        <BsWifi className="me-2" /> Wifi Available
                      </p>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="fw-bold">
                        <BiUserCheck className="me-2" /> Min Age: 10
                      </p>
                    </div>
                    <div className="col-6 col-md-3">
                      <p className="fw-bold">
                        <BiLocationPlus className="me-2" /> Picup: Airport
                      </p>
                    </div>
                  </div>
                </div>
                <div className="tour_description mb-5">
                  <h5>Description</h5>
                  <p>{description}</p>
                </div>
              </div>
              <div className="col-12 col-md-3 col-lg-2 border p-4 mb-5 border-2">
                <p className="border-bottom pb-3 border-2">
                  <span>From</span>
                  <span className="custom_price">${price}</span>
                </p>
                <p className="mb-0">Date</p>
                <h6 className="mb-5">Dec 10/2021</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="tour_booking px-3 mb-5">
        <h3 className="text-center text-capitalize">book this tour</h3>
        <div className="row">
          <div className="col-0 col-md-2 col-lg-3"></div>
          <div className="col-12 col-md-8 col-lg-6">
            <form onSubmit={handleBookingTour}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
                <div id="emailHelp" className="form-text">
                  We'll never share your email with anyone else.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputAddress"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Phone
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhone"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-outline-primary text-capitalize w-100"
              >
                Confirm
              </button>
            </form>
            {/* <button
              onClick={handleBookingTour}
              className="btn btn-outline-primary text-capitalize w-100"
            >
              Confirm
            </button> */}
          </div>
          <div className="col-0 col-md-2 col-lg-3"></div>
        </div>
      </section>
    </div>
  );
};

export default TourDetails;
