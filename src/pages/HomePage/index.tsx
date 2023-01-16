import React from 'react';
import PizzaCardItem from '../../components/PizzaCardItem';
import PizzaPopUp from '../../components/PizzaPopUp';
import SkeletonPopUp from '../../components/SkeletonPopUp';
import Pagination from '../../components/Pagination';
import style from "./HomePage.module.scss"
import SkeletonHomeItem from '../../components/SkeletonHomeItem';
import qs from "qs"

import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../hooks'
import { useAppDispatch } from '../../hooks';
import { fetchPizzaItems } from '../../store/actions/pizzaItemsActions'
import { fetchPizzaUrl } from '../../store/actions/urlInfoActions'
import { fetchItems } from "../../store/splice/pizzaItemsSplice"
import { setPizzaName, setPage } from '../../store/splice/filterSplice'


const HomePage:React.FC = () => {
  type Iparams = {
    page?: string,
    pizzaName?: string
  }

  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  const { loading, items, error, paginationItems } = useAppSelector((start) => start.pizzaItemsSplice)
  const { pizzaWisible, pizzaItem, pizzaLoading } = useAppSelector((start) => start.urlInfoSplice)
  const { pizzaName, page } = useAppSelector((state) => state.filterSplice)

  const isRequest = React.useRef(true)

  React.useEffect(() => {
    const url = window.location.search.slice(1);
    const params:Iparams = qs.parse(url)

    if (params.page) {
      dispatch(setPage(Number(params.page)))
      isRequest.current = false;
    }
    if (params.pizzaName) {
      dispatch(setPizzaName(params.pizzaName))
      isRequest.current = false;
    }
  },[])

  React.useEffect(() => {
    if (isRequest.current) {
      dispatch(fetchPizzaItems(page, paginationItems))
      return () => {
        dispatch(fetchItems([]))
      }
    }
    isRequest.current = true;
  }, [page])

  React.useEffect(() => {
    if (pizzaName) {
      dispatch(fetchPizzaUrl(pizzaName))
    }
  }, [pizzaName])

  React.useEffect(() => {
    const urlString = `${page > 1 ? `page=${page}&` : ""}${pizzaName && `pizzaName=${pizzaName}&`}`
    const parseUrl = qs.parse(urlString);

    const url = qs.stringify(parseUrl);
    
    navigate(`?${url}`);
  },[page, pizzaName])
  

  return(
    <>
      {loading && <div className={style.louder}>{[...Array(8)].map((el, i) => <SkeletonHomeItem key={i}/>)}</div>}
      {error && <div>2222222222</div>}
      {items && <div className={style.pizzas}>
        {items.map((el) => <PizzaCardItem key={el.id} item={el}/>)}
      </div>} 
      {pizzaWisible && <PizzaPopUp pizzaItem={pizzaItem}/>}
      {pizzaLoading && <SkeletonPopUp/>}
      <div className={style.pagination}><Pagination /></div>
      
    </>
  );
};

export default HomePage;