/* eslint-disable-next-line no-unused-vars */
import React from "react";
import HeaderOrder from "../Header/HeaderOrder/HeaderOrder.jsx";
import OrderLine from "../Order/OrderLine/OrderLine.jsx";
import OrderFilters from "../Order/OrderFilters/OrderFilters.jsx";
import OrderLastTickets from "../Order/OrderLastTickets/OrderLastTickets.jsx";
import Seats from "../Seats/Seats.jsx";
import Footer from "../Footer/Footer.jsx";
import "./SeatsPage.css";

function SeatsPage() {
  return (
    <>
      <HeaderOrder />
      <OrderLine />
      <div className="order-container">
        <div className="container">
          <div className="order-content">
            <div className="order-sidebar">
              <OrderFilters />
              <OrderLastTickets />
            </div>
            <div className="seats seats-wrapper">
              <Seats />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SeatsPage;