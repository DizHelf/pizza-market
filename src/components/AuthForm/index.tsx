import React from 'react';
import style from './AuthForm.module.scss'
import { Link, useParams } from 'react-router-dom'

const AuthForm:React.FC = () => {

  return(
    <>
      <form className={style.form}>
          <div className={style.formItems}>
            <label className={style.lable}>email</label>
            <input className={style.input} type="email"/>
          </div>

          <div className={style.formItems}>
            <label className={style.lable}>password</label>
            <input className={style.input} type="password"/>
          </div>

          <div className={style.info}>
            <Link className={style.link} to={"/form/reg"}>Регистрация</Link>
            <button className={style.button}>Войти</button>
          </div>

        </form>
    </>
  );
};

export default AuthForm;