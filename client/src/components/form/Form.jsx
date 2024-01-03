import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import {addActivity} from "../../redux/actions";
import style from "./Form.module.css"



export const Form = () => {

     const dispatch = useDispatch()
    const countries = useSelector(state => state.countries);
    const [info, setInfo] = useState({
        name : "", 
        difficulty:"", 
        duration:"", 
        season:"", 
        countryId:""
    }) 

    console.log(countries)


    const handleChange = (e) => {
        const { name, value } = e.target;

            setInfo({
                ...info,
                [name]: value,
            });
        
    };
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(info)
        dispatch(addActivity(info))
        setInfo(
            {     
        name : "", 
        difficulty:"", 
        duration:"", 
        season:"", 
        countryId:"" 
        })
    }
  return (
    <div className={style.content}>
        <div className={style.button}>
            <Link to='/home'>
                <button>Volver</button>
            </Link>
        </div>
        <div className={style.contentform}>
            <form onSubmit={handleSubmit} className={style.formu}>
                <div className={style.formgroup}>
                <label htmlFor="name" className={style.label}>Name</label>
                <select name="name" onChange={handleChange} className={style.select}>
                <option disabled selected value>Elegir una opción</option>
					<option value='Trekking'>Trekking</option>
					<option value='Hike'>Hike</option>
					<option value='Bike Tour'>Bike Tour</option>
					<option value='City Tour'>City Tour</option>
					<option value='Gastronomic Circuit'>Gastronomic Circuit</option>
                    <option value='Rapel'>Rapel</option>
					<option value='Shopping'>Shopping</option>
					<option value='Museum Circuit'>Museum Circuit</option>
				</select>
                </div>

                <br />
                <div className={style.formgroup}>
                <label htmlFor="duration" className={style.label} >Duration</label>
                <select name="duration" onChange={handleChange} className={style.select} >
					<option disabled selected value>Elegir una opción</option>
					<option value={1}>1 mes</option>
					<option value={2}>2 mes</option>
					<option value={3}>3 mes</option>
					<option value={4}>4 mes</option>
                    <option value={5}>5 mes</option>
                    <option value={6}>6 mes</option>
					<option value={7}>7 mes</option>
                    </select>
                </div>

                <br />
                <div className={style.formgroup}>
                <label htmlFor="season" className={style.label} >season</label>
                <select name="season" onChange={handleChange} className={style.select} >
					<option disabled selected value>Elegir una opción</option>
					<option value='Summer'>Summer</option>
					<option value='Autumn'>Autumn</option>
					<option value='Winter'>Winter</option>
					<option value='Spring'>Spring</option>
				</select>
                </div>
                <br />
                <div className={style.formgroup}>
                <label htmlFor="countryId" className={style.label} >Pais</label>
                <select name='countryId' onChange={handleChange} className={style.select} >
						<option  > Elegir una opcion</option>	
                        {countries.map(country=> (
                        
                            <option className='width-75' key={country.id} value={country.id}>{country.id}
            
                        </option>
                          
                          
                     
                        ))}
                        </select>
                </div>
                <br />
                <div className={style.formgroup}>
                <label htmlFor="difficulty" className={style.label} >Difficulty</label>
                <select name="difficulty" onChange={handleChange} className={style.select} >
                <option disabled selected value>Elegir una opción</option>
					<option value='Soft'>Soft</option>
					<option value='Easy'>Easy</option>
					<option value='Normal'>Normal</option>
					<option value='Difficult'>Difficult</option>
					<option value='Hard'>Hard</option>
				</select>
                </div>
                <br />
                <div className={style.formgroup}>
                <button type="submit"  >Submit</button>
                </div>
            </form>
        </div>
    </div>
)}
