import React from 'react';
import ReacrDom from "react-dom"
import ReactPaginate from 'react-paginate';
import style from './Pagination.module.scss';


import { useAppDispatch, useAppSelector } from '../../hooks'
import { setPage } from '../../store/splice/filterSplice'


const Pagination:React.FC = () => {

  const dispath = useAppDispatch();
  const { page } = useAppSelector((state) => state.filterSplice)
  const [pageNamber, setPageNamber] = React.useState(page)

  React.useEffect(() => {
    setPageNamber(page)
  }, [page])


  return(
    <>
      <ReactPaginate
        onClick={(event)=>console.log(event.nextSelectedPage)}
        className={style.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={event => dispath(setPage(event.selected + 1))}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="<"
        pageClassName="paginationLi"
        pageLinkClassName="paginationLinck"
        previousLinkClassName="previousLinkClassName"
        nextLinkClassName="nextLinkClassName"
        forcePage={pageNamber-1}
      />
    </>
  );
};

export default Pagination;