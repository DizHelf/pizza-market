import React from 'react';
import { IResponcePizza } from '../../modules/pizzaInterface'
import style from './CartItem.module.scss'
import { useAppDispatch, useAppSelector } from '../../hooks'
import { deleteCratItems } from '../../store/actions/cartPizzaActions'
import { fetchItems } from '../../store/splice/cartPizzaSplice'

interface PropsProduct{
  item: IResponcePizza;
}

const CartItem:React.FC<PropsProduct> = ({item}) => {

  const { items } = useAppSelector(stata=> stata.cartPizzaSplice)
  const dispath = useAppDispatch();
  

  const deleteItem = () => {
    dispath(deleteCratItems(item.id))
    dispath(fetchItems(items.filter(el=> el.id !== item.id)))
  }

  return(
    <>
      <div className={style.CartItem}>
          <div className={style.info}>
            <img className={style.img} src={item.path} alt={item.name} />
            <div className={style.textInfo}>
              <h3 className={style.title}>{item.name}</h3>
              <p className={style.subTitle}>size:{item.size} type:{item.type}</p>
            </div>
          </div>
          <div className={style.priceAndButton}>
            <div className={style.price}>{item.price} Р</div>
            <button onClick={deleteItem} className={style.button}>Удалить</button>
          </div>
      </div>
    </>
  );
};

export default CartItem;