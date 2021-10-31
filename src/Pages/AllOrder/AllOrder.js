import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../SharedComponent/Spinner/LoadingSpinner";
import useContextAPI from "../../Hooks/useContextAPI";
import OrderItem from "./Component/OrderItem";
import Flash from "react-reveal/Flash";

const AllOrder = () => {
  const { tours, dataLoading, user } = useContextAPI();
  const [allOrders, setAllOrders] = useState([]);
  const [allOrdersLoading, setAllOrdersLoading] = useState(true);
  const [updateObserver, setUpdateObserver] = useState(1);
  const [actionsError, setActionsError] = useState("");

  const handleUpdate = (id) => {
    setActionsError("");
    const url = `https://dark-phantom-53445.herokuapp.com/api/order/${id}/${user.uid}`;
    const updateOrder = async () => {
      console.log("inside patch");
      const result = await axios.patch(url);
      console.log(result);
      if (result.data?.status === "fail") {
        setActionsError("You are not authorised to perform this action.");
      } else {
        setUpdateObserver(updateObserver + 1);
      }
    };
    updateOrder();
  };

  const handleDelete = (id) => {
    setActionsError("");
    const url = `https://dark-phantom-53445.herokuapp.com/api/order/${id}/${user.uid}`;
    const deleteOrder = async () => {
      const result = await axios.delete(url);
      console.log(result);
      if (result.data?.status === "fail") {
        setActionsError("You are not authorised to perform this action.");
      } else {
        setUpdateObserver(updateObserver + 1);
      }
    };

    deleteOrder();
  };

  useEffect(() => {
    const fetchAllOrders = async () => {
      setAllOrdersLoading(true);
      const result = await axios(
        "https://dark-phantom-53445.herokuapp.com/api/order"
      );
      const allOrders = result.data.allOrders;
      const populatedAllOrders = allOrders.map((order) => {
        const indexOfOrder = tours.findIndex(
          (tour) => tour._id === order.tourID
        );
        if (indexOfOrder > -1) {
          const { name, price } = tours[indexOfOrder];
          return { ...order, tourName: name, tourPrice: price };
        }
      });
      setAllOrders(populatedAllOrders);
      setAllOrdersLoading(false);
    };

    fetchAllOrders();
  }, [updateObserver]);
  return (
    <div className="container my-5">
      {actionsError.length > 0 && (
        <Flash forever={true} duration={1200}>
          <p className="text-danger fw-bold text-center">{actionsError} </p>
        </Flash>
      )}
      <div className="row mb-3 bg-primary text-light p-2">
        <div className="col-1 small custom_font_size">No.</div>
        <div className="col-2 text-center small custom_font_size">
          Booked By
        </div>
        <div className="col-3 text-center small custom_font_size">
          Booked Tour
        </div>
        <div className="col-1 small custom_font_size">Tour Price</div>
        <div className="col-1 small custom_font_size">Status</div>
        <div className="col-2 small text-end custom_font_size ms-auto custom_font_size">
          Actions
        </div>
      </div>
      {allOrdersLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : allOrders.length > 0 ? (
        allOrders.map((order, index) => (
          <OrderItem
            key={order._id}
            {...order}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
            index={index}
          />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AllOrder;
