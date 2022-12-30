import React from 'react';
import PizzaCardItem from '../../components/PizzaCardItem';
import PizzaPopUp from '../../components/PizzaPopUp';
import Pagination from '../../components/Pagination';
import style from "./HomePage.module.scss"
import SkeletinsHomeItem from '../../components/SkeletinsHomeItem';

import { useAppSelector } from '../../hooks'
import { useAppDispatch } from '../../hooks';
import { fetchPizzaItems } from '../../store/actions/pizzaItemsActions'
import { fetchPizzaUrl } from '../../store/actions/urlInfoActions'
import { fetchItems } from "../../store/splice/pizzaItemsSplice"


const HomePage:React.FC = () => {

  const dispatch = useAppDispatch();

  const { loading, items, error, page, paginationItems } = useAppSelector((start) => start.pizzaItemsSplice)
  const { pizzaName, pizzaWisible, pizzaItem } = useAppSelector((start) => start.urlInfoSplice)

  React.useEffect(() => {
    dispatch(fetchPizzaItems(page, paginationItems))
    return () => {
      dispatch(fetchItems([]))
    }
  }, [dispatch, page])

  React.useEffect(() => {
    if (pizzaName) {
      dispatch(fetchPizzaUrl(pizzaName))
    }
  }, [pizzaName])

  console.log([Array(8)]);
  

  return(
    <>
      {loading && <div className={style.louder}>{[...Array(8)].map((el, i) => <SkeletinsHomeItem key={i}/>)}</div>}
      {error && <div>2222222222</div>}
      {items && <div className={style.pizzas}>
        {items.map((el) => <PizzaCardItem key={el.id} item={el}/>)}
      </div>} 
      {pizzaWisible && <PizzaPopUp pizzaItem={pizzaItem}/>}
      <div className={style.pagination}><Pagination /></div>
      
    </>
  );
};

export default HomePage;