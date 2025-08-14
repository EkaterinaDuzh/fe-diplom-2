/* eslint-disable-next-line no-unused-vars */
import React from 'react';
import HeaderOrder from '../Header/HeaderOrder/HeaderOrder.jsx';
import OrderLine from '../Order/OrderLine/OrderLine.jsx';
import OrderDetails from '../Order/OrderDetails/OrderDetails.jsx';
import PaymentInfo from './PaymentInfo/PaymentInfo.jsx';
import Footer from '../Footer/Footer.jsx';

const PaymentPage = () => {
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
            <PaymentInfo />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PaymentPage;