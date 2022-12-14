import React from 'react';

import style from './ButtonsPopUp.module.scss'

interface PropsProduct {
  el: string[]
  setActiveButton: Function
}

const ButtonsPopUp:React.FC<PropsProduct> = ({el, setActiveButton}) => {

  const [active, setActive] = React.useState(el[0])

  React.useEffect(() => {
    setActiveButton(active)
  }, [])

  const updateActiveButton = (el:string) => {
    setActive(el)
    setActiveButton(el)
  }

  return(
    <>
      <div className={style.buttons}>
         {el.map((el) => <button  onClick={()=>updateActiveButton(el)} key={el} className={`${style.button} ${active === el? style.active : ""}`}>{el}</button>)}
      </div>
</>
  );
};

export default ButtonsPopUp;