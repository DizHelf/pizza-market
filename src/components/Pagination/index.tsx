import React from 'react';
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';

import { useAppDispatch, useAppSelector } from '../../hooks'
import { fetchPage } from '../../store/splice/pizzaItemsSplice'


const Pagination:React.FC = () => {

  const dispath = useAppDispatch();
  const { page } = useAppSelector((state) => state.pizzaItemsSplice)

  return(
    <>
      <ReactPaginate
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => dispath(fetchPage(event.selected + 1))}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="<"
        pageClassName="paginationLi"
        pageLinkClassName="paginationLinck"
        previousLinkClassName="previousLinkClassName"
        nextLinkClassName="nextLinkClassName"
        initialPage={page-1}
      />
    </>
  );
};

export default Pagination;