import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom'

import style from "./App.module.scss"

import HomePage from './pages/HomePage';
import Header from './components/Header';
import CardPage from './pages/CartPage';
import AuthPage from "./pages/AuthPage"
import AuthForm from './components/AuthForm';
import RegForm from './components/RegForm';

function App() { 

  return (
    <>
      <Header/>

      <div className={style.dopMargin}>
        <div className={style.container}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/cart' element={<CardPage/>}/>
            <Route path='/form' element={<AuthPage/>}>
              <Route path='auth' element={<AuthForm/>}/>
              <Route path='reg' element={<RegForm/>}/>
            </Route>

            <Route path='/:page/:id' element={<AuthForm/>}/>

            {/* редирект */}
            <Route path='*' element={<Navigate to={"/"} replace/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
