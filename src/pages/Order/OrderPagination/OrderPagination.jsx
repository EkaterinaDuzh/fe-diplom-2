/* eslint-disable-next-line no-unused-vars */
import React, { memo, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppContext from '../../../context/appContext.js';
import ReactPaginate from 'react-paginate';
import OrderTrain from '../OrderTrain/OrderTrain.jsx';
import './OrderPagination.css';

function Items({ data = null }) {
  if (!data || !data.items || !Array.isArray(data.items)) {
    return <>Результаты не найдены</>;
  }
  
  return data.items.map((item, index) => (
    <OrderTrain key={item?.departure?._id || index} item={item} />
  ));
}

Items.propTypes = {
  data: PropTypes.object,
};

function PaginatedItems({ itemsPerPage, routes = null, onChange = () => {} }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = ({ selected }) => {
    if (!routes || !routes.items || !Array.isArray(routes.items)) return;
    const offset = Math.min(selected * itemsPerPage, routes.items.length);
    setItemOffset(offset);
    onChange(offset);
  };

  useEffect(() => {
    if (!routes || !routes.items || !Array.isArray(routes.items)) {
      setPageCount(0);
      return;
    }
    const totalItems = routes.items.length;
    setPageCount(Math.ceil(totalItems / itemsPerPage));
  }, [itemsPerPage, routes]);

  if (!routes) {
    return <>Загрузка...</>;
  }

  return (
    <>
      <Items data={routes} />
      {routes.items && Array.isArray(routes.items) && routes.items.length > 0 && (
        <ReactPaginate
          className="pagination-wrapper"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          marginPagesDisplayed={1}
          pageCount={pageCount}
          previousLabel="<"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          breakLabel="..."
          breakClassName="page-item"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      )}
    </>
  );
}

PaginatedItems.propTypes = {
  itemsPerPage: PropTypes.number.isRequired,
  routes: PropTypes.object,
  onChange: PropTypes.func,
};

function OrderPagination({ routes = null, onChange = () => {} }) {
  const { appState } = useContext(AppContext);

  return (
    <div className="order-pagination">
      <PaginatedItems
        itemsPerPage={Number(appState?.limit ?? 5)}
        routes={routes}
        onChange={onChange}
      />
    </div>
  );
}

OrderPagination.propTypes = {
  routes: PropTypes.object,
  onChange: PropTypes.func,
};

export default memo(OrderPagination);