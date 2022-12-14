import React from 'react';

import style from './ButtonsPopUp.module.scss'

interface PropsProduct {
  size: string[],
  setActiveButton: Function,
  updatePriceNumber?: Function
}

const ButtonsPopUp:React.FC<PropsProduct> = ({size, setActiveButton, updatePriceNumber}) => {

  const [active, setActive] = React.useState(size[0])
  

  const updateActiveButton = (el:string) => {
    setActive(el)
    setActiveButton(el)
  }

  const setProrsParent = (el:string, i:number) => {
    updateActiveButton(el);
    if (updatePriceNumber) {
      console.log(1);
      updatePriceNumber(i)
    }
  }

  return(
    <>
      <div className={style.buttons}>
         {size.map((el, i) => <button  onClick={()=> setProrsParent(el, i)} key={el} className={`${style.button} ${active === el? style.active : ""}`}>{el}</button>)}
      </div>
</>
  );
};

export default ButtonsPopUp;