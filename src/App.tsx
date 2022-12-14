import React from 'react';
import { Route, Routes } from 'react-router-dom'

import style from "./App.module.scss"

import HomePage from './pages/HomePage';
import Header from './components/Header';


function App() {

  return (
    <>
      <Header/>

      <div className={style.dopMargin}>
        <div className={style.container}>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/ewq' element={<div>321</div>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
