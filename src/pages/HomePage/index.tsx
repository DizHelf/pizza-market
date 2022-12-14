import React from 'react';
import { useAppSelector } from '../../hooks'
import PizzaCardItem from '../../components/PizzaCardItem';
import PizzaPopUp from '../../components/PizzaPopUp';

import { useAppDispatch } from '../../hooks';
import { fetchPizzaItems } from '../../store/actions/pizzaItemsActions'
import { fetchPizzaUrl } from '../../store/actions/urlInfoActions'
import style from "./HomePage.module.scss"

const HomePage:React.FC = () => {

  const dispatch = useAppDispatch();

  const { loading, items, error } = useAppSelector((start) => start.pizzaItemsSplice)
  const { pizzaName, pizzaWisible, pizzaItem } = useAppSelector((start) => start.urlInfoSplice)

  React.useEffect(() => {
    dispatch(fetchPizzaItems())
  },[dispatch])

  React.useEffect(() => {
    if (pizzaName) {
      dispatch(fetchPizzaUrl(pizzaName))
    }
  }, [dispatch, pizzaName])

  
  return(
    <>
      {loading && <div>1111111</div>}
      {error && <div>2222222222</div>}
      {items && <div className={style.pizzas}>
        {items.map((el) => <PizzaCardItem key={el.id} item={el}/>)}
      </div>} 
      {pizzaWisible && <PizzaPopUp pizzaItem={pizzaItem}/>}
    </>
  );
};

export default HomePage;