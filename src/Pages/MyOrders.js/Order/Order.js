import React, { useState } from "react";
import "./Order.css";
import { AiFillDelete } from "react-icons/ai";

const Order = (props) => {
  const { bookedTour, deleteABookedTour } = props;
  const [showModal, setShowModal] = useState(false);
  const [deletedTourID, setDeletedTourID] = useState("");
  console.log(bookedTour);

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
      {bookedTour.length > 0 && (
        <div>
          {bookedTour.map((tour, index) => (
            <div className="row fw-bold custom_order">
              <div className="col-2 text-start border-0 py-1 border-bottom d-flex align-items-center">
                {index + 1}
              </div>
              <div className="col-4 text-center text-capitalize border-0 py-1 border-bottom d-flex align-items-center">
                {tour.tourName}
              </div>
              <div className="col-2 text-center text-capitalize border-0 py-1 border-bottom d-flex align-items-center">
                $ {tour.tourPrice}
              </div>
              <div className="col-2 text-center text-capitalize border-0 py-1 border-bottom d-flex align-items-center">
                {tour.date}
              </div>
              <div className="col-2 text-end text-capitalize border-0 py-1 border-bottom d-flex align-items-center">
                <button
                  className="btn d-flex align-items-center"
                  onClick={() => handleModal(tour._id)}
                >
                  <AiFillDelete className="text-danger custome_order_icon" />
                </button>
              </div>
            </div>
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
