/* eslint-disable-next-line no-unused-vars */
import React from "react";
import HeaderOrder from "../Header/HeaderOrder/HeaderOrder.jsx";
import OrderLine from "../Order/OrderLine/OrderLine.jsx";
import OrderDetails from "../Order/OrderDetails/OrderDetails.jsx";
import PassengersInfo from "./PassengersInfo/PassengersInfo.jsx";
import Footer from "../Footer/Footer.jsx";

function PassengersPage() {
  return (
    <>
      <HeaderOrder />
      <OrderLine />
      <div className="order-container">
        <div className="container">
          <div className="order-content">
            <div className="order-sidebar">
              <OrderDetails />
            </div>
            <PassengersInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PassengersPage;