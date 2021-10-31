import React, { useState } from "react";
import Slide from "react-reveal/Slide";

const OrderItem = (props) => {
  const {
    name,
    tourName,
    statusPending,
    tourPrice,
    index,
    _id,
    handleUpdate,
    handleDelete,
  } = props;
  const [showModal, setShowModal] = useState(false);
  const [orderID, setorderID] = useState("");
  const [action, setAction] = useState("");

  const handleModal = (id, str) => {
    setShowModal(true);
    setorderID(id);
    setAction(str);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmModal = (type) => {
    if (action === "update") {
      handleUpdate(orderID);
    } else if (action === "delete") {
      handleDelete(orderID);
    }
    setShowModal(false);
  };
  return (
    <>
      <Slide duration={1200} delay={index * 200} left>
        <div className="row py-2 mb-2 custom_order border border-bottom">
          <div className="col-1 text-uppercase fw-bold small">{index + 1}</div>
          <div className="col-3 text-uppercase fw-bold small">{name}</div>
          <div className="col-2 text-uppercase fw-bold small">{tourName}</div>
          <div className="col-1 text-uppercase fw-bold small">${tourPrice}</div>
          <div
            className={`col-2 text-uppercase fw-bold small d-inline-block badge text-${
              statusPending ? "danger" : "success"
            }`}
          >
            {statusPending ? "Pending" : "Approved"}
          </div>
          <div className="col-2 text-uppercase fw-bold">
            <div>
              {" "}
              <button
                className="btn btn-outline-primary me-1"
                onClick={() => handleModal(_id, "update")}
              >
                confirm
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => handleModal(_id, "delete")}
              >
                Delete
              </button>{" "}
            </div>{" "}
          </div>
        </div>
      </Slide>
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
    </>
  );
};

export default OrderItem;
