import React, { useState, useEffect } from "react";
import axios from "axios";
import LoadingSpinner from "../SharedComponent/Spinner/LoadingSpinner";
import useContextAPI from "../../Hooks/useContextAPI";
import OrderItem from "./Component/OrderItem";
import axios from "axios";
const AllOrder = () => {
  const { tours, dataLoading } = useContextAPI();
  const [allOrders, setAllOrders] = useState([]);
  const [allOrdersLoading, setAllOrdersLoading] = useState(true);
  const [updateObserver, setUpdateObserver] = useState();

  const handleUpdate = (id) => {
    const url = `http://localhost:5000/api/order/${id}`;
    console.log(url);
    const updateOrder = async () => {
      const result = await axios.patch("");
    };
  };

  console.log(allOrders);
  useEffect(() => {
    const fetchAllOrders = async () => {
      setAllOrdersLoading(true);
      const result = await axios("http://localhost:5000/api/order");
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
  }, []);
  return (
    <div className="container my-5">
      <div className="row mb-3">
        <div className="col-1 small">No.</div>
        <div className="col-2 text-center small">Booked By</div>
        <div className="col-3 text-center small">Booked Tour</div>
        <div className="col-1 small">Tour Price</div>
        <div className="col-1 small">Status</div>
        <div className="col-2 small text-end">Actions</div>
      </div>
      {allOrdersLoading ? (
        <LoadingSpinner></LoadingSpinner>
      ) : allOrders.length > 0 ? (
        allOrders.map((order, index) => (
          <OrderItem key={order._id} {...order} index={index} />
        ))
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default AllOrder;
