import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from '../../components/card/Card';
import { getCountryById } from "../../redux/actions";
import { useParams, Link } from "react-router-dom";
import style from './Detail.module.css';

export const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();


  const countryDetails = useSelector(state => state.countries.find(c=>c.id === id)) // Acceder solo a los detalles del país específico

 
useEffect(() => {
  dispatch(getCountryById(id));
}, [dispatch, id]);
console.log(id);
console.log(countryDetails);

  return (
      <div>
      <div className={style.contain}>
      {countryDetails && ( // Verificar si los detalles del país están disponibles antes de renderizar
        <Card
          id={countryDetails.id}
          name={countryDetails.name}
          flags={countryDetails.image}
          region={countryDetails.continent}
          subregion={countryDetails.subregion}
          capital={countryDetails.capital}
          area={countryDetails.area}
          population={countryDetails.population}
          Activities={countryDetails?.Activities || []}
        />
      )}
    </div>
    <div className={style.boton}>
          <Link to="/home">
            <button className={style.button}>H o m e</button>
          </Link>
        </div>
    </div>
  );
};