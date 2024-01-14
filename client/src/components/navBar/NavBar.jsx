import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { paginate, filter, getCountry, orderName, orderPopulation, resetFilter } from "../../redux/actions";
import { Link } from "react-router-dom";
import style from './NavBar.module.css';

export const NavBar = () => {
  const dispatch = useDispatch();
  const activities = useSelector(state => state.activities);
  const [selectedContinent, setSelectedContinent] = useState('');
  const [selectedActivity, setSelectedActivity] = useState('');

  useEffect(() => {
    dispatch(getCountry());
  }, [dispatch, activities]);

  function handleDispatch(e) {
    if (e.target.name === 'Nombre') {
      dispatch(orderName(e.target.value));
    }

    if (e.target.name === 'Poblacion') {
      dispatch(orderPopulation(e.target.value));
    }
    dispatch(paginate(1));
  }

  function handleFilter(e) {
    const filterValue = e.target.value;
    if (e.target.name === 'Continente') {
      setSelectedContinent(filterValue);
      dispatch(filter({ filterType: 'Continente', filterValue }));
    }
    if (e.target.name === 'Actividad') {
      setSelectedActivity(filterValue);
      dispatch(filter({ filterType: 'Actividad', filterValue }));
    }
    dispatch(orderName('Ascendente'));
    dispatch(paginate(1));
  }

  function handleRemoveFilter() {
    setSelectedContinent('');
    setSelectedActivity('');
    dispatch(resetFilter());
    window.location.reload();
  }

  return (
    <div className={style.container}>
      <div className={style.row}>
        <div className={style.sortSection}>
          <p>Ordenar por nombre: </p>
          <select onChange={handleDispatch} name='Nombre'>
            <option disabled value>Elegir una opción</option>
            <option value='Ascendente'>Ascendente</option>
            <option value='Descendente'>Descendente</option>
          </select>
        </div>

        <div className={style.sortSection}>
          <p>Ordenar por Población: </p>
          <select onChange={handleDispatch} name='Poblacion'>
            <option disabled value>Elegir una opción</option>
            <option value='Ascendente'>Ascendente</option>
            <option value='Descendente'>Descendente</option>
          </select>
        </div>

        <div className={style.sortSection}>
          <p>Filtrar por Continente: </p>
          <select onChange={handleFilter} name='Continente' value={selectedContinent}>
            <option disabled value=''>
              Elegir una opción
            </option>
            <option value='Africa'>Africa</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europa</option>
            <option value='Oceania'>Oceania</option>
            <option value='Americas'>Americas</option>
          </select>
        </div>

        <div className={style.sortSection}>
          <p>Filtrar por Actividad: </p>
          <select onChange={handleFilter} name='Actividad' value={selectedActivity}>
            <option disabled value=''>
              Elegir una opción
            </option>
            {activities.map((a, i) => (
              <option key={i++} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <input
        type='button'
        onClick={handleRemoveFilter}
        value='Limpiar Filtros'
        className={style.removeFilterButton}
      />
      <div>
        <Link to='/create'>
          <button className={style.createButton}>Crear Actividad</button>
        </Link>
      </div>
    </div>
  );
};