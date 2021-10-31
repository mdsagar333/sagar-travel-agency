import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import Slide from "react-reveal/Slide";
const Order = (props) => {
  const { bookedTour, deleteABookedTour } = props;
  const [showModal, setShowModal] = useState(false);
  const [deletedTourID, setDeletedTourID] = useState("");

  const handleModal = (id) => {
    setShowModal(true);
    setDeletedTourID(id);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmModal = () => {
    deleteABookedTour(deletedTourID);
    setShowModal(false);
  };
  return (
    <div>
      <h1 className="text-center mb-5 text-capitalize">My booked tours</h1>
      {bookedTour.length > 0 && (
        <div className="container">
          <div className="row mb-2 bg-primary text-light p-2">
            <div className="col-2 custom_font_size">No.</div>
            <div className="col-3 custom_font_size">Booked Tour</div>
            <div className="col-2 custom_font_size">Price</div>
            <div className="col-3 custom_font_size">Date</div>
            <div className="col-2 custom_font_size">Action</div>
          </div>
          {bookedTour.map((tour, index) => (
            <Slide duration={1200} delay={index * 200} left>
              <div className="row fw-bold custom_order border mb-2">
                <div className="col-2 text-start py-1 d-flex align-items-center custom_font_size">
                  {index + 1}
                </div>
                <div className="col-4 text-center text-capitalize  py-1  d-flex align-items-center custom_font_size">
                  {tour.tourName}
                </div>
                <div className="col-2 text-center text-capitalize  py-1  d-flex align-items-center custom_font_size">
                  $ {tour.tourPrice}
                </div>
                <div className="col-2 text-center text-capitalize  py-1  d-flex align-items-center custom_font_size">
                  {tour.date}
                </div>
                <div className="col-2 text-end text-capitalize  py-1  d-flex align-items-center custom_font_size">
                  <button
                    className="btn d-flex align-items-center"
                    onClick={() => handleModal(tour._id)}
                  >
                    <AiFillDelete className="text-danger custome_order_icon" />
                  </button>
                </div>
              </div>
            </Slide>
          ))}
          {/* modal */}
          <div className={`${showModal ? "d-block" : "d-none"} custom_modal`}>
            <div className="d-flex justify-content-center align-items-center">
              <div className="modal_content p-3 mt-5">
                <h3>Are you sure? You want to delete?</h3>
                <div className="d-flex justify-content-end">
                  <div className="modal_btn_container mt-5">
                    <button
                      className="btn btn-outline-primary me-2"
                      onClick={handleConfirmModal}
                    >
                      Confirm{" "}
                    </button>
                    <button
                      className="btn btn-outline-primary"
                      onClick={handleCloseModal}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end of modal */}
        </div>
      )}
    </div>
  );
};

export default Order;
