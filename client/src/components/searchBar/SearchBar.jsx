import { useState, useEffect } from "react";
import style from './SearchBar.module.css';


function SearchBar({ onSearch, setCountryFilter }){
	const [name, setName] = useState('')
	const formatName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()

	useEffect(() => {
		setCountryFilter(formatName)
	},[setCountryFilter, formatName])

	return(
		<div className={style.content}>
			<div className={style.inputContainer}>
      <input
        type='text'
        name={name}
        onChange={e => setName(e.target.value)}
        className={style.input}
        placeholder="Insertar búsqueda"
      />
      <div className={style.topline}></div>
      <div className={style.underline}></div>
    </div>
		</div>
	)
}

export default SearchBar