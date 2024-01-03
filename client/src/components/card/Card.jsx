import React from 'react';
import style from './Card.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getCountryById } from '../../redux/actions';

export const Card = ({ id, name, flags, region, subregion, capital, area, population, Activities }) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const dispatch = useDispatch();
  const isDetailPage = currentPath.includes(`/home/${id}`);

  useEffect(() => {
    dispatch(getCountryById(id));
  }, [dispatch, id]);
  
  return (
    <div className={`${isDetailPage ? style.cardcont : ''}`}>
    <div className={`${style.card}`}>
      <img className={style.cardimage} src={flags} alt='foto' />
      <div className={style.category}> {name}</div>
      <div className={style.heading}>
        <p>Capital del Pais : {capital}</p>
        <p>Continente: {region}</p>
        <p>sub-region : {subregion}</p>
        <p>Poblacion : {population}</p>
        <p>Area : {area}</p>
       
      </div>
      <div className={style.contpadre}>
      {isDetailPage && (
        
           <div className={style.contt}>
          <ul className={style.contlista} >
            {Activities?.map((activity) => (
              <div>
              <li key={activity.id} className={style.lista}>
              <h2>A c t i v i d a d </h2>  
                <strong>Nombre:</strong> {activity.name}<br />
                <strong>Dificultad:</strong> {activity.difficulty}<br />
                <strong>Duración:</strong> {activity.duration} horas<br />
                <strong>Temporada:</strong> {activity.season}<br />
              </li>
              </div>
            ))}
          </ul>
          </div>
         
        )}
        </div>
     { !isDetailPage && (
        <div className={style.boton}>
          <Link to={`/home/${id}`}>
            <button className={style.button}>D e t a l l e s</button>
          </Link>
        </div>
    )}
    </div>
    </div>
  );
};
