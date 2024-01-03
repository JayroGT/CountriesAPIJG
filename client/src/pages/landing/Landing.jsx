import React from 'react';
import { Link } from 'react-router-dom';
import style from './Landing.module.css';


export const Landing = () => {
  return (
    <div className={style.landingContent}>
      <div>
      Press the button to start!!
      </div>
      <div className={style.buttonContainer}>
        <Link to={'/home'}>
        <button className={style.but}>
            <span className={style.sp}>S T A R T</span>
        </button>
        </Link>
      </div>
    </div>
  )
};
