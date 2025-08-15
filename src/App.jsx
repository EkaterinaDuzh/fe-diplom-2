/* eslint-disable-next-line no-unused-vars */
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import AppContext from './context/appContext.js';
import RouteContext from './context/routeContext.js';
import OrderContext from './context/orderContext.js';
import PayContext from './context/payContext.js';

import { initialAppState } from './utils/initialAppState.js';
import { initialRouteState } from './utils/initialRouteState.js';
import { initialOrderState } from './utils/initialOrderState.js';
import { initialPayState } from './utils/initialPayState.js';

import StartPage from './pages/StartPage/StartPage.jsx';
import OrderPage from './pages/OrderPage/OrderPage.jsx';
import SeatsPage from './pages/SeatsPage/SeatsPage.jsx';
import PassengersPage from './pages/PassengersPage/PassengersPage.jsx';
import PaymentPage from './pages/PaymentPage/PaymentPage.jsx';
import ConfirmPage from './pages/ConfirmPage/ConfirmPage.jsx';
import FinishPage from './pages/FinishPage/FinishPage.jsx';

import './App.css';

function App() {
  const [appState, setAppState] = useState(initialAppState);
  const [routeState, setRouteState] = useState(initialRouteState);
  const [orderState, setOrderState] = useState(initialOrderState);
  const [payState, setPayState] = useState(initialPayState);

  // Определите базовый путь для вашего репозитория
  const basename = '/fe-diplom_2';

  return (
    <div className="app">
      <AppContext.Provider value={{ appState, setAppState }}>
        <RouteContext.Provider value={{ routeState, setRouteState }}>
          <OrderContext.Provider value={{ orderState, setOrderState }}>
            <PayContext.Provider value={{ payState, setPayState }}>
              <Router basename={basename}>
                <Routes>
                  <Route path="/" element={<StartPage />} />
                  <Route path="/order" element={<OrderPage />} />
                  <Route path="/order/seats" element={<SeatsPage />} />
                  <Route path="/order/passengers" element={<PassengersPage />} />
                  <Route path="/order/payment" element={<PaymentPage />} />
                  <Route path="/order/confirm" element={<ConfirmPage />} />
                  <Route path="/finish" element={<FinishPage />} />
                </Routes>
              </Router>
            </PayContext.Provider>
          </OrderContext.Provider>
        </RouteContext.Provider>
      </AppContext.Provider>
    </div>
  );
}

export default App;