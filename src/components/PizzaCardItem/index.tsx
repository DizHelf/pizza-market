import React from "react"
import { IPizza } from "../../modules/pizzaInterface"
import style from "./pizzaCardItem.module.scss"
import { useAppDispatch } from "../../hooks"
import { setPizzaName } from '../../store/splice/urlInfoSplice'

interface PropsProduct {
  item: IPizza;
}

const PizzaCardItem:React.FC<PropsProduct> = ({item}) => {

  const dispatch = useAppDispatch();

  const openPopUp = (name:string) => {
    dispatch(setPizzaName(name))
  }

  
  return(
    <>
      <div onClick={() => openPopUp(item.name)} className={style.pizza}>
        <img onClick={() => openPopUp(item.name)} src={item.path} alt={item.name} className={style.img} />

        <div className={style.pizzaInfo}>
            
            <div className={style.info}>
              <div className={style.title}>{item.name}</div>
              <p className={style.description}>{item.description}</p>
            </div>

            <div className={style.bay}>
              <div className={`${style.price} ${style.buttonPrice}`}>от {item.price[0]}Р</div>
              <button className={style.button}>Выбрать</button>
            </div>
        </div>
        
      </div>
    </>
  );
};

export default PizzaCardItem;