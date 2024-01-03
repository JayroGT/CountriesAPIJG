import React from 'react';
import { useDispatch } from 'react-redux';
import { paginate } from '../../redux/actions';
import Style from './Paginated.module.css';

function Paginated({ countries, couPerPage, currentPage }) {
  const dispatch = useDispatch();
  const totalPages = Math.ceil(countries / couPerPage);

  const handlePageChange = (newPage) => {
    dispatch(paginate(newPage));
  };

  return (
    <div className={Style.list}>
      <ul className={Style.pagination}>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map((n) => (
          <li
            key={n}
            className={`${Style.pageNumber} ${currentPage === n ? Style.active : ''}`}
            onClick={() => handlePageChange(n)}
          >
            {n}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Paginated;