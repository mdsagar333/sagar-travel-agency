import axios from "axios";
import React, { useRef, useState } from "react";
import useContextAPI from "../../Hooks/useContextAPI";

import Flash from "react-reveal/Flash";

const CreateTour = () => {
  const { user } = useContextAPI();
  const [tourNotification, setTourNotification] = useState("");
  const nameRef = useRef();
  const priceRef = useRef();
  const maxPeopleRef = useRef();
  const countryRef = useRef();
  const durationRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const dateRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setTourNotification("");
    const newDate = new Date(dateRef.current.value);
    const date = `${newDate.getFullYear()}`;
    const tourData = {
      name: nameRef.current.value,
      price: priceRef.current.value,
      maxPeople: maxPeopleRef.current.value,
      country: countryRef.current.value,
      duration: durationRef.current.value,
      description: descriptionRef.current.value,
      images: imageRef.current.value,
      date,
    };

    const createTour = async () => {
      const result = await axios.post(
        `https://dark-phantom-53445.herokuapp.com/api/tours/${user.uid}`,
        {
          ...tourData,
        }
      );
      console.log(result);
      if (result.status === 201) {
        setTourNotification("A tour has been created successfully.");
      } else {
        setTourNotification(
          "There was something wrong please try again later."
        );
      }
    };

    createTour();
  };
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4 text-capitalize">Create a tour</h1>

      <div className="row">
        <div className="col-0 col-md-2 col-lg-3"></div>
        <div className="col-0 col-md-8 col-lg-6">
          {tourNotification.length > 0 && (
            <Flash duration={1000} forever={true}>
              <p className="text-danger fw-bold"> {tourNotification} </p>
            </Flash>
          )}
          <div className="custom_create_tour">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={nameRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Price
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPassword1"
                  ref={priceRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Maximum People
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhone"
                  ref={maxPeopleRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Country
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPhone"
                  ref={countryRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputDate" className="form-label">
                  Date
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="exampleInputDate"
                  ref={dateRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Duration
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleInputPhone"
                  ref={durationRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputAddress" className="form-label">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="exampleInputAddress"
                  required
                  ref={descriptionRef}
                  rows="3"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Image
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputPhone"
                  ref={imageRef}
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPhone" className="form-label">
                  Image Link
                </label>
                <input
                  type="file"
                  className="form-control"
                  id="exampleInputPhone"
                  disabled
                />
              </div>

              <button
                type="submit"
                className="btn btn-outline-primary text-capitalize"
              >
                Confirm
              </button>
            </form>
          </div>
        </div>
        <div className="col-0 col-md-2 col-lg-3"></div>
      </div>
    </div>
  );
};

export default CreateTour;
