import React from "react";
import { Card } from '../card/Card';
import { useSelector} from "react-redux";

import style from './Cards.module.css'
export const Cards = ({ countries }) => {

  const country = useSelector((state) => state.countries);
  const countriesRender = countries.length > 0 ? countries : country;
  return (
    
      <div className={style.content}>
        { 
                countriesRender.map((country, index)=>{
                    return (
                    <div key={index} >
                        <Card 
                        className={style.cards}
                        key={country?.id}
                        id={country?.id} 
                        name={country?.name} 
                        flags = {country?.image}  
                        region={country?.continent}
                        subregion={country?.subregion}
                        capital={country?.capital}
                        area={country?.area}
                        population={country?.population}
                        Activities={country?.Activities || []}  // Pasa el array completo de actividades al componente Card                    
                        />
                    </div>
                    )              
                  })

            }
 </ div>
  
  )}
