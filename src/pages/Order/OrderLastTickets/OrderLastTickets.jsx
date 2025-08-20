/* eslint-disable-next-line no-unused-vars */
import React, { useState, useEffect } from 'react';
import SVGicon from '../../../components/SVGicon/SVGicon.jsx';
import './OrderLastTickets.css';

const OrderLastTickets = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await fetch('https://students.netoservices.ru/fe-diplom/routes/last');
        if (!res.ok) throw new Error(`Ошибка ${res.status}: ${res.statusText}`);
        const json = await res.json();
        if (json && json.data && Array.isArray(json.data)) {
          setTickets(json.data);
        } else {
          setTickets([]);
        }
      } catch (err) {
        console.error('Ошибка при загрузке билетов:', err.message);
        setError(err.message);
        setTickets([]);
      } finally {
        setLoading(false);
      }
    };

    fetchTickets();
  }, []);

  if (loading) {
    return <div className="order-last-tickets last-tickets">Загрузка...</div>;
  }

  if (error) {
    return <div className="order-last-tickets last-tickets">Ошибка: {error}</div>;
  }

  return (
    <div className="order-last-tickets last-tickets">
      <h2 className="last-tickets__title">Последние билеты</h2>
      <div className="last-tickets__wrapper">
        {tickets && tickets.length > 0 ? tickets.map(ticket => {
          if (!ticket || !ticket.departure) return null;
          
          const departure = ticket.departure;
          const from = departure.from || {};
          const to = departure.to || {};
          const fromCity = from.city || {};
          const toCity = to.city || {};
          
          return (
            <div className="last-tickets__item ticket-item" key={departure._id || Math.random()}>
              <div className="ticket-item__city">
                <p className="ticket-item__from_city">{fromCity.name || ''}</p>
                <p className="ticket-item__to_city">{toCity.name || ''}</p>
              </div>
              
              <div className="ticket-item__railway">
                <p className="ticket-item__from_railway">{from.railway_station_name || ''}</p>
                <p className="ticket-item__to_railway">{to.railway_station_name || ''}</p>
              </div>
              
              <div className="ticket-item__options">
                {['have_wifi', 'have_air_conditioning']
                  .filter(key => departure[key])
                  .map((key, index) => (
                    <div className="ticket-item__option" key={index}>
                      <SVGicon name={key} />
                    </div>
                  ))
                }
              </div>
              
              <p className="ticket-item__cost">
                от
                <span className="ticket-item__cost-value">{departure.min_price || 0}</span>
                <span className="ticket-item__cost-currency">₽</span>
              </p>
            </div>
          );
        }) : (
          <p>Последние билеты не найдены.</p>
        )}
      </div>
    </div>
  );
};

export default OrderLastTickets;