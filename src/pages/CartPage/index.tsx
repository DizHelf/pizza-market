import React from 'react';
import { useAppDispatch, useAppSelector } from "../../hooks";
import { cartPizzaItems } from '../../store/actions/cartPizzaActions'
import CartItem from '../../components/CartItem';

const CardPage:React.FC = () => {

  const {items} = useAppSelector((state) => state.cartPizzaSplice);
  const dispath = useAppDispatch()

  React.useEffect(() => {
    dispath(cartPizzaItems())
  }, [])

  return(
    <>
      <div >
        {items.map(el=> <CartItem key={el.id} item={el}/>)}
      </div>
    </>
  );
};

export default CardPage;