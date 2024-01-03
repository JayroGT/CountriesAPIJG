import {GET_COUNTRY,
    GET_COUNTRY_ID,
    GET_COUNTRY_NAME,
    ADD_ACTIVITY,
    GET_ACTIVITY,
    RESET_FILTER,
    ORDER_NAME,
    ORDER_POPULATION,
    PAGINATE,
    FILTER_ACTIVITY
    } from "./actionTypes";

const initialState = {
  countries: [],
  activities: [],
  country: {},
  filteredCountries: [],
  sortedCountries: [],
  currentPage: 1,
  paginatedCountries: [],
};
var sortedCountries;
const countriesPerPage = 10;

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        countries: action.payload,
        sortedCountries: action.payload,
        filteredCountries: action.payload,
      };
    case GET_COUNTRY_ID:
      return {
        ...state,
        country: action.payload,
      };
    case GET_COUNTRY_NAME:
      return {
        ...state,
        country: action.payload,
      };
    case ADD_ACTIVITY:
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    case GET_ACTIVITY:
      return {
        ...state,
        activities: action.payload,
      };
      case FILTER_ACTIVITY:
        let filteredCountries = state.countries;
        let { filterType, filterValue } = action.payload;
        if (filterType === "Continente") {
          filteredCountries = filteredCountries.filter(
            (c) => c.continent === filterValue
          );
        }
        if (filterType === 'Actividad') {
          filteredCountries = filteredCountries.filter((c) =>
            c.Activities.some((activity) => activity.name === filterValue)
          );
          console.log(filteredCountries)
        }
        if (filterType === "Nombre") {
          filteredCountries = filteredCountries.filter((c) =>
            c.name.toLowerCase().includes(filterValue.toLowerCase())
          );
        }
        return {
          ...state,
          filteredCountries: filteredCountries,
        };
        case RESET_FILTER:
          return {
            ...state,
            filteredCountries: state.countries,
          };

    case ORDER_NAME:
      if (action.payload === "Ascendente") {
        sortedCountries = state.filteredCountries.sort((a, b) => {
          return a.name > b.name ? 1 : -1;
        });
      }
      if (action.payload === "Descendente") {
        sortedCountries = state.filteredCountries.sort((a, b) => {
          return a.name > b.name ? -1 : 1;
        });
      }
      return {
        ...state,
        sortedCountries: sortedCountries,
      };
    case ORDER_POPULATION:
      if (action.payload === "Ascendente") {
        sortedCountries = state.filteredCountries.sort((a, b) => {
          return a.population > b.population ? 1 : -1;
        });
      }
      if (action.payload === "Descendente") {
        sortedCountries = state.filteredCountries.sort((a, b) => {
          return a.population > b.population ? -1 : 1;
        });
      }
      return {
        ...state,
        sortedCountries: sortedCountries,
      };
    case PAGINATE:
      let currentPage = action.payload;
      let offset = (currentPage - 1) * countriesPerPage;
      const paginatedCountries = state.sortedCountries.filter(
        (_, index) => index >= offset && index < offset + countriesPerPage
      );
      return {
        ...state,
        paginatedCountries: paginatedCountries,
        currentPage: currentPage,
      };
   
    default:
      return state;
  }
}

export default rootReducer;
