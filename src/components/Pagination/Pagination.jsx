import React from 'react';
import styled from 'styled-components';

import { calculatePageNumber } from './pagination.util';

const Pagination = ({className, currentPage = 1, total = 1, itemPerPage = 20, handlePageChange}) => {
  const pages = calculatePageNumber(total, itemPerPage);
  let pagesCards = [];

  const setPagesCard = () => {
    let startPage = 1;

    pagesCards = [];

    if (currentPage > 2 && pages >= 5) {
      if (pages - currentPage >= 2) {
        startPage = currentPage - 2 ;
      }
      if (pages - currentPage === 1) {
        startPage = currentPage - 3 ;
      }
    }

    for (let page = startPage; page <= pages; page++) {
      if (pagesCards.length < 5) {
        pagesCards.push(page);
      }
    }
  };

  setPagesCard();

  return (
    <ul className={className}>
      {pagesCards.map(page =>
        <li key={page} onClick={() => handlePageChange(page)}>
          {page === currentPage ? <strong>{page}</strong> : page}
        </li>)}
    </ul>
  );
};

export default styled(Pagination)`
  list-style: none;
  display: flex;
  flex-direction: row;
  
  li {
    border: solid 1px #CCCCCC;
    padding: 5px;
    margin: 5px;
    background: #FFFFFF;
    cursor: pointer;
  }
`;
