import React from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { IPizza } from '../../modules/pizzaInterface';
import style from "./PizzaPopUp.module.scss"

import { setClearing, setPizzaWisible, setPizzaSize, setPizzaType } from '../../store/splice/urlInfoSplice'
import ButtonsPopUp from '../ButtonsPopUp';
import { postPizzaItem } from '../../store/actions/urlInfoActions'

interface PropsProduct {
  pizzaItem: IPizza 
}

const PizzaPopUp:React.FC<PropsProduct> = ({pizzaItem}) => {

  const {pizzaSize, pizzaItem: staetPizzaItem, pizzaType} = useAppSelector((staet) => staet.urlInfoSplice)
  const dispatch = useAppDispatch()

  const clearingPizzaCard = () => {
    dispatch(setPizzaWisible(false));
    dispatch(setClearing());
  }

  const setSize = (el:string) => {
    dispatch(setPizzaSize(el));
  }

  const setType = (el:string) => {
    dispatch(setPizzaType(el));
  }

  const submitPizzaItem = () => {
    dispatch(postPizzaItem(staetPizzaItem, pizzaSize, pizzaType))
  }


  return(
    <>
      <div className={style.popUp}>
        <div className={style.card}>
          <img onClick={clearingPizzaCard} className={style.xImg} src="/img/svg/times.svg" alt="" />

          <div className={style.img}>
            <img alt='pizza' src={pizzaItem.path} className={style.pizzaImg}/>
          </div>

          <div className={style.info}>
            <h2 className={style.title}>{pizzaItem.name}</h2>

            <p className={style.subTitle}>{pizzaItem.description}</p>

            <div className={style.buttons}>
              <ButtonsPopUp el={pizzaItem.size} setActiveButton={setSize}/>
              <ButtonsPopUp el={pizzaItem.types} setActiveButton={setType}/>
            </div>

            <button onClick={submitPizzaItem} className={style.buttoAcept}>Добавить</button>

          </div>
        </div>
      </div>
    </>
  );
};

export default PizzaPopUp;


