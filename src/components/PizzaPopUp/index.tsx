import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IPizza } from '../../modules/pizzaInterface';
import style from "./PizzaPopUp.module.scss"

import {setPizzaWisible, setPizzaSize, setPizzaType, setPizzaPrice, clearPizzaInfo } from '../../store/splice/urlInfoSplice'
import ButtonsPopUp from '../ButtonsPopUp';
import { postPizzaItem } from '../../store/actions/urlInfoActions'

interface PropsProduct {
  pizzaItem: IPizza 
}

const PizzaPopUp:React.FC<PropsProduct> = ({pizzaItem}) => {

  const {pizzaSize, pizzaItem: staetPizzaItem, pizzaType, pizzaPrice} = useAppSelector((staet) => staet.urlInfoSplice)
  const dispatch = useAppDispatch()

  React.useEffect(() => {
    dispatch(setPizzaSize(pizzaItem.size[0]))
    dispatch(setPizzaType(pizzaItem.types[0]))
    dispatch(setPizzaPrice(pizzaItem.price[0]))
  }, [])

  const clearingPizzaCard = () => {
    dispatch(clearPizzaInfo())
    dispatch(setPizzaWisible(false));
  }

  const setSize = (el:string) => {
    dispatch(setPizzaSize(el));
  }

  const setType = (el:string) => {
    dispatch(setPizzaType(el));
  }

  const setPrice = (i:number) => {
    dispatch(setPizzaPrice(i));
  }

  const submitPizzaItem = () => {
    dispatch(postPizzaItem(staetPizzaItem, pizzaSize, pizzaType, pizzaPrice))
  }


  return(
    <>
      <div className={style.popUp}>
        <div onClick={() => dispatch(clearingPizzaCard)} className={style.background}></div>

        <div className={style.card}>
          <img onClick={clearingPizzaCard} className={style.xImg} src="/img/svg/times.svg" alt="" />

          <div className={style.img}>
            <img alt='pizza' src={pizzaItem.path} className={style.pizzaImg}/>
          </div>

          <div className={style.info}>
            <h2 className={style.title}>{pizzaItem.name}</h2>

            <p className={style.subTitle}>{pizzaItem.description}</p>

            <div className={style.buttons}>
              <ButtonsPopUp size={pizzaItem.size} setActiveButton={setSize} updatePriceNumber={setPrice}/>
              <ButtonsPopUp size={pizzaItem.types} setActiveButton={setType}/>
            </div>

            <button onClick={submitPizzaItem} className={style.buttoAcept}>Добавить {pizzaPrice ? pizzaPrice : pizzaItem.price[0]}Р</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaPopUp;


