import React from 'react';
import { Link } from 'react-router-dom'
import style from "./Header.module.scss"
import { useAppDispatch } from '../../hooks'
import { resetInfo } from '../../store/splice/filterSplice'

const Header:React.FC = () => {

  const dispatch = useAppDispatch();

  const clickLogoImg = () => {
    dispatch(resetInfo())
  }

  return(
    <>
      <div className={style.header}>
        <div className={style.container}>
          <Link onClick={clickLogoImg} to={"/"}>
            <img src="/img/pizzaLogo.png" alt="pizzaLogo" className={style.img} />
          </Link>
          <nav className={style.nav}>
            <ul className={style.list}>
              <li className={style.item}>
                <Link to={"/cart"}>
                  <img className={style.cart} src="/img/svg/cart.svg" alt="cart" />
                </Link>
              </li>
              <li className={style.item}>
                <Link className={style.login} to={"/form/auth"}>Войти</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;