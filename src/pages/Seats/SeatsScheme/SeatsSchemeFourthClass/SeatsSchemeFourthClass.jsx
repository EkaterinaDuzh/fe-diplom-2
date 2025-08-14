import React from 'react';
import PropTypes from 'prop-types';

const SeatButton = ({ number, available, onClick }) => {
  return (
    <button
      className={`scheme__seats-item ${available ? '' : 'disabled'}`}
      type="button"
      disabled={!available}
      onClick={onClick}
    >
      {number}
    </button>
  );
};

SeatButton.propTypes = {
  number: PropTypes.number.isRequired,
  available: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function SeatsSchemeFourthClass({ seats, onChange }) {
  const getStatus = index => {
    const foundSeat = seats.find(seat => seat.index === index);
    return foundSeat?.available ?? false;
  };

  const handleSeatSelection = (seatNumber, event) => {
    const isSelected = document.getElementsByClassName(`seat-${seatNumber}`).length > 0;

    const wagonDetailsContainer = event.currentTarget.closest('.seats__wagon-details');
    const coachId = wagonDetailsContainer.id;
    const direction = event.currentTarget.closest('.seats__container').dataset.name;

    onChange({
      way: direction,
      type: 'fourth',
      coach_id: coachId,
      seatIndex: seatNumber,
      seatSide: '',
      selected: !isSelected,
    });
  };

  return (
    <div className="scheme__seats-container scheme__seats-fourth-class">
      <ul className="scheme__seats-fourth-class_right-side">
        {[...Array(16)].map((_, rowIndex) => (
          <li className="scheme__seats-row" key={rowIndex}>
            <SeatButton
              number={rowIndex * 2 + 1}
              available={getStatus(rowIndex * 2 + 1)}
              onClick={(event) => handleSeatSelection(rowIndex * 2 + 1, event)}
            />
            <SeatButton
              number={rowIndex * 2 + 2}
              available={getStatus(rowIndex * 2 + 2)}
              onClick={(event) => handleSeatSelection(rowIndex * 2 + 2, event)}
            />
          </li>
        ))}
      </ul>

      <ul className="scheme__seats-fourth-class_left-side">
        {[...Array(16)].map((_, rowIndex) => (
          <li className="scheme__seats-row" key={rowIndex}>
            <SeatButton
              number={rowIndex * 2 + 33}
              available={getStatus(rowIndex * 2 + 33)}
              onClick={(event) => handleSeatSelection(rowIndex * 2 + 33, event)}
            />
            <SeatButton
              number={rowIndex * 2 + 34}
              available={getStatus(rowIndex * 2 + 34)}
              onClick={(event) => handleSeatSelection(rowIndex * 2 + 34, event)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

SeatsSchemeFourthClass.propTypes = {
  seats: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired,
      available: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SeatsSchemeFourthClass;