import React from "react";

const OrderItem = (props) => {
  console.log(props);
  const { name, tourName, statusPending, tourPrice, index, _id } = props;
  return (
    <div className="row py-2 mb-2">
      <div className="col-1 text-uppercase fw-bold small">{index + 1}</div>
      <div className="col-3 text-uppercase fw-bold small">{name}</div>
      <div className="col-2 text-uppercase fw-bold small">{tourName}</div>
      <div className="col-1 text-uppercase fw-bold small">${tourPrice}</div>
      <div className="col-2 text-uppercase fw-bold small">
        {statusPending ? "Pending" : "Confirm"}
      </div>
      <div className="col-2 text-uppercase fw-bold">
        <div>
          {" "}
          <button className="btn btn-outline-primary me-1">confirm</button>
          <button className="btn btn-outline-danger">Delete</button>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default OrderItem;
