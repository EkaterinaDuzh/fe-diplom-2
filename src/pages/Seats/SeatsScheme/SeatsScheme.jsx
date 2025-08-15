/* eslint-disable-next-line no-unused-vars */
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import OrderContext from '../../../context/orderContext.js';
import WagonHeader from './img/wagon-header.png';
import WagonFooter from './img/wagon-footer.png';
import SeatsSchemeFourthClass from './SeatsSchemeFourthClass/SeatsSchemeFourthClass.jsx';
import SeatsSchemeThirdClass from './SeatsSchemeThirdClass/SeatsSchemeThirdClass.jsx';
import SeatsSchemeSecondClass from './SeatsSchemeSecondClass/SeatsSchemeSecondClass.jsx';
import SeatsSchemeFirstClass from './SeatsSchemeFirstClass/SeatsSchemeFirstClass.jsx';
import './SeatsScheme.css';

/* eslint-disable-next-line no-unused-vars */
const SeatHandler = ({ value }) => {
  const { orderState, setOrderState } = useContext(OrderContext);

  // eslint-disable-next-line no-undef
  const targetWagon = data.coach._id === value.coach_id ? data : null;
  let ticketPrice;

  switch(targetWagon?.coach.class_type) {
    case 'first':
      ticketPrice = targetWagon.coach.price;
      break;
    case 'third':
      ticketPrice = +value.seatIndex > 32 ? targetWagon.coach.side_price :
                 (+value.seatIndex % 2 === 0 ? targetWagon.coach.top_price : targetWagon.coach.bottom_price);
      break;
    default:
      ticketPrice = +value.seatIndex % 2 === 0 ? targetWagon.coach.top_price : targetWagon.coach.bottom_price;
  }

  const currentWay = value.way === 'departure' ? 'departure' : 'arrival';
  const wayArray = [...(orderState[currentWay].seats || [])];

  if (!wayArray.some((item) => item.seat_number === value.seatIndex)) {
    wayArray.push({
      coach_id: value.coach_id,
      seat_number: value.seatIndex,
      seat_cost: ticketPrice,
      selected: true,
    });
  } else {
    wayArray.splice(wayArray.findIndex((item) => item.seat_number === value.seatIndex), 1);
  }

  setOrderState(prevState => ({
    ...prevState,
    [currentWay]: {
      ...prevState[currentWay],
      seats: wayArray,
    },
  }));
};

function SeatsScheme({ data }) {
  return (
    <div className="seats__scheme scheme">
      <p className="scheme__wagon-number">{data.coach.name}</p>
      <div className="scheme__container">
        <img className="scheme__wagon-img" src={WagonHeader} alt="Wagon"/>
        <div className="scheme__seats-wrapper">
          {(() => {
            switch(data.coach.class_type) {
              case 'fourth': return <SeatsSchemeFourthClass seats={data.seats} />;
              case 'third': return <SeatsSchemeThirdClass seats={data.seats} />;
              case 'second': return <SeatsSchemeSecondClass seats={data.seats} />;
              case 'first': return <SeatsSchemeFirstClass seats={data.seats} />;
              default: return null;
            }
          })()}
        </div>
        <img className="scheme__wagon-img" src={WagonFooter} alt="Wagon"/>
      </div>
    </div>
  );
}

export default SeatsScheme;

SeatsScheme.propTypes = {
  data: PropTypes.object.isRequired,
};