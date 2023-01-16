import React from 'react';
import style from './AuthPage.module.scss'
import { Outlet } from 'react-router-dom'


const AuthPage:React.FC = () => {
  return(
    <>
      <div className={style.info}>
        <Outlet/>
      </div>
    </>
  );
};

export default AuthPage;