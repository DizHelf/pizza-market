import React from 'react';
import { Link } from 'react-router-dom'
import style from "./Header.module.scss"

const Header:React.FC = () => {
  return(
    <>
      <div className={style.header}>
        <div className={style.container}>
          <Link to={"/"}>
            <img src="/img/pizzaLogo.png" alt="pizzaLogo" className={style.img} />
          </Link>
          <nav className={style.nav}>
            <ul className={style.list}>
              <li className={style.item}>
                <img className={style.cart} src="/img/svg/cart.svg" alt="cart" />
              </li>
              <li className={style.item}>
                <Link className={style.login} to={"/autharization"}>Войти</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;