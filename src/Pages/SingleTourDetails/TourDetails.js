import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { GrMapLocation } from "react-icons/gr";
import { BiTime, BiUserCheck, BiLocationPlus } from "react-icons/bi";
import { BsPeopleFill, BsWifi } from "react-icons/bs";
import useContextAPI from "../../Hooks/useContextAPI";
import { Link } from "react-router-dom";
import LoadingSpinner from "../SharedComponent/Spinner/LoadingSpinner";
import axios from "axios";

const TourDetails = () => {
  const { tourId } = useParams();
  const { tours, dataLoading, user } = useContextAPI();
  const [userName, setuserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userUid, setUserUid] = useState(null);
  const [tourID, settourID] = useState("");
  const [bookingMessage, setbookingMessage] = useState("");

  // reference for address and phone input value
  const addressRef = useRef(null);
  const phoneRef = useRef(null);
  const dateRef = useRef(null);

  // using useEffect for setting user name, email and Uid from currently logged-in user
  useEffect(() => {
    setuserName(user.displayName);
    settourID(_id);
    setUserUid(user.uid);
    if (user.email) {
      setUserEmail(user.email);
    }
  }, []);

  // email validation function
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleBookingTour = (e) => {
    e.preventDefault();
    setbookingMessage("");
    const phoneNumber = phoneRef.current.value;
    const address = addressRef.current.value;
    const orderDate = new Date();
    const date = `${orderDate.getFullYear()}-${orderDate.getMonth()}-${orderDate.getDate()}`;
    // console.log(orderDate);
    // creating user-data object
    const userData = {
      phoneNumber,
      address,
      userName,
      userEmail,
      userUid,
      tourID,
      date,
    };
    // validating email
    if (!validateEmail(userEmail)) {
      setbookingMessage("Pleaes enter a valid email!");
      return;
    }

    // checking for 11 digit which is standar phone number in bd
    if (phoneNumber.toString().length !== 11) {
      setbookingMessage(
        "Please enter a valid phone number! Phone number must be 11 digit long."
      );
      return;
    }
    console.log(phoneNumber, address, userName, userEmail, userUid, tourID);
    axios
      .post("http://localhost:5000/api/order", {
        phoneNumber,
        address,
        userName,
        userEmail,
        userUid,
        tourID,
      })
      .then((response) => {
        console.log(response);
        setbookingMessage(response.data.message);
        setUserEmail("");
        addressRef.current.value = "";
        phoneRef.current.value = "";
      });
  };

  const handleUserEmail = (e) => {
    setUserEmail(e.target.value);
  };

  const tour = tours.find((tour) => tour._id === tourId);
  if (tour) {
    var {
      _id,
      country,
      duration,
      images,
      name,
      price,
      description,
      maxGroupSize,
      date,
    } = tour;
  }

  return (
    <div>
      {dataLoading ? (
        <LoadingSpinner />
      ) : (
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
                    <h6 className="mb-5">{date}</h6>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="tour_booking px-3 mb-5">
            <h3 className="text-center text-capitalize mb-5">book this tour</h3>
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
                      required
                      value={userEmail}
                      onChange={handleUserEmail}
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="exampleInputPassword1"
                      className="form-label"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputPassword1"
                      value={userName}
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
                      ref={addressRef}
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
                      ref={phoneRef}
                    />
                  </div>
                  {bookingMessage.length > 0 && (
                    <p className="text-danger fw-bold small">
                      {" "}
                      {bookingMessage}{" "}
                    </p>
                  )}
                  <button
                    type="submit"
                    className="btn btn-outline-primary text-capitalize w-100"
                  >
                    Confirm
                  </button>
                </form>
              </div>
              <div className="col-0 col-md-2 col-lg-3"></div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default TourDetails;
