/* eslint-disable-next-line no-unused-vars */
import React, { useContext, useState, useRef } from "react";
import PropTypes from "prop-types";
import AppContext from "../../../context/appContext.js";
import "./OrderResultsControl.css";

const OrderResultsControl = ({ count }) => {
/* eslint-disable-next-line no-unused-vars */
  const { appState, setAppState } = useContext(AppContext);
  const [option, setOption] = useState({ dataValue: "date", value: "времени" });
  const [view, setView] = useState({ dataValue: "5", value: "5" });
  const [isSortOpen, setIsSortOpen] = useState(false);
  const selectButtonRef = useRef(null);

  const handleSortSelect = (value) => {
    const valueMap = {
      "date": "времени",
      "price": "стоимости",
      "duration": "длительности"
    };
    
    setOption({ dataValue: value, value: valueMap[value] || value });
    setAppState((prevState) => ({
      ...prevState,
      sort: value,
    }));
    setIsSortOpen(false);
  };

  const handleViewChange = (newValue) => {
    setView({ dataValue: newValue, value: newValue });
    setAppState((prevState) => ({
      ...prevState,
      limit: newValue,
    }));
  };

  const toggleSortDropdown = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleDropdownClickOutside = (e) => {
    if (selectButtonRef.current && !selectButtonRef.current.contains(e.target)) {
      setIsSortOpen(false);
    }
  };

  React.useEffect(() => {
    if (isSortOpen) {
      document.addEventListener('click', handleDropdownClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleDropdownClickOutside);
    };
  }, [isSortOpen]);

  return (
    <div className="order-results__control result-control">
      <p>найдено: <span className="result-control__find-value">{count}</span></p>
      
      <div className="result-control__sort">
        <p>сортировать по: </p>
        <div className="result-control__select">
          <button
            ref={selectButtonRef}
            className="result-control__select-btn"
            type="button"
            data-value={option.dataValue}
            aria-expanded={isSortOpen}
            aria-controls="sort-options"
            onClick={toggleSortDropdown}
          >
            {option.value}
          </button>
          <ul 
            id="sort-options" 
            role="listbox" 
            className={`result-control__options ${isSortOpen ? 'result-control__options-visible' : ''}`}
          >
            <li>
              <button 
                className="result-control__option" 
                type="button" 
                data-value="date" 
                onClick={() => handleSortSelect("date")}
              >
                По времени
              </button>
            </li>
            <li>
              <button 
                className="result-control__option" 
                type="button" 
                data-value="price" 
                onClick={() => handleSortSelect("price")}
              >
                По стоимости
              </button>
            </li>
            <li>
              <button 
                className="result-control__option" 
                type="button" 
                data-value="duration" 
                onClick={() => handleSortSelect("duration")}
              >
                По длительности
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div className="result-control__view">
        <p>показывать по: </p>
        <div className="result-control__view-wrapper">
          {["5", "10", "20"].map((value) => (
            <button
              key={value}
              className={`view-button${view.dataValue === value ? '_active' : ''}`}
              type="button"
              data-value={value}
              onClick={() => handleViewChange(value)}
            >
              {`${value} шт.`}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

OrderResultsControl.propTypes = {
  count: PropTypes.number.isRequired,
};

export default OrderResultsControl;