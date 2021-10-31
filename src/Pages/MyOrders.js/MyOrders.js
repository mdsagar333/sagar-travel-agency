import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsTypeH1 } from "react-icons/bs";
import useContextAPI from "../../Hooks/useContextAPI";
import LoadingSpinner from "../SharedComponent/Spinner/LoadingSpinner";
import Order from "./Order/Order";

const MyOrders = () => {
  const { user, tours } = useContextAPI();
  const [orderLoading, setOrderLoading] = useState(true);
  const [orders, setOrders] = useState([]);

  console.log(user.uid);
  const deleteABookedTour = (orderID) => {
    console.log(orderID);
    const url = `http://localhost:5000/api/order/${orderID}`;
    const confirmDelete = async () => {
      const result = await axios.delete(url);
      if (result.status === 204) {
        const newOrders = orders.filter((order) => order._id !== orderID);
        setOrders(newOrders);
      }
    };
    confirmDelete();
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const url = `http://localhost:5000/api/order/${user.uid}`;

        const result = await axios(url);
        console.log(result);

        if (result.data.status === "success") {
          const bookedOrders = result.data.bookedTour;
          const populatedBookedTours = bookedOrders.map((order) => {
            const indexOfTour = tours.findIndex(
              (tour) => tour._id === order.tourID
            );
            if (indexOfTour > -1) {
              const { name, price, date } = tours[indexOfTour];
              return { ...order, tourName: name, tourPrice: price, date };
            }
          });
          console.log(populatedBookedTours, "populated");
          setOrders(populatedBookedTours);
        }

        setOrderLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchOrders();
  }, []);

  return (
    <>
      {orderLoading ? (
        <LoadingSpinner />
      ) : orders.length > 0 ? (
        <div className="my_orders_container container my-5">
          <Order
            bookedTour={orders}
            deleteABookedTour={deleteABookedTour}
          ></Order>
        </div>
      ) : (
        <h4 className="text-center my-5">
          You have no booked tour at this moment.
        </h4>
      )}
    </>
  );
};

export default MyOrders;
