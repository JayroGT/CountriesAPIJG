import React from 'react'
import style from './Home.module.css'
import {Cards} from "../../components/cards/Cards";
import Paginated from "../../components/paginated/Paginated";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchBar from "..//../components/searchBar/SearchBar";
import { NavBar } from '../../components/navBar/NavBar';

import {
  filter,
  getActivity,
  getCountry,
  getCountryByName,
  orderName,
  paginate,
} from "../../redux/actions";



export const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const sortedCountries = useSelector((state) => state.sortedCountries);
  const filteredCountries = useSelector((state) => state.filteredCountries);
  const paginatedCountries = useSelector((state) => state.paginatedCountries);
  const [searchResult, setSearchResult] = useState([]);
  const [countryFilter, setCountryFilter] = useState("");
  const couPerPage = 10;

  useEffect(() => {
    dispatch(getCountry());
    dispatch(getActivity());
  }, [dispatch]);

  useEffect(() => {
    dispatch(paginate(1));
  }, [dispatch, countries, sortedCountries, filteredCountries]);

  useEffect(() => {
    dispatch(filter({ filterType: "Nombre", filterValue: countryFilter }));
    if (countryFilter.length >= 30) {
      dispatch(getCountryByName(countryFilter)).then((res) => {
        setSearchResult(res.payload);
      });
    }
    dispatch(orderName("Ascendente"));
  }, [dispatch, countryFilter]);

  function handleSearch(name) {
    dispatch(getCountryByName(name)).then((res) => {
      setSearchResult(res.payload);
    });
  }
  return (
  

    <div>
      <div className={style.tittle}>
        <h1 className={style.letra}>
          C O U N T R I E S <br />A P I
        </h1>
      </div>
      <div className={style.navPer}>
              
              <SearchBar
                setCountryFilter={setCountryFilter}
                onSearch={handleSearch}
              />
              <NavBar />
              <Paginated
                countries={filteredCountries.length}
                couPerPage={couPerPage}
              />
        </div>
        <div className={style }>
            <Cards countries={paginatedCountries} />
        </div>
      

    </div>
  )};