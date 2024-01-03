import axios from "axios";

import {GET_COUNTRY,
GET_COUNTRY_ID,
GET_COUNTRY_NAME,
ADD_ACTIVITY,
GET_ACTIVITY,
FILTER_ACTIVITY,
RESET_FILTER,
ORDER_NAME,
ORDER_POPULATION,
PAGINATE
} from "./actionTypes";


const URL = "http://localhost:3001";

export function getCountry() {
  try {
    return async function (dispatch) {
      let response = await axios.get(`${URL}/countries`);
      console.log("paises: ", response);
      return dispatch({
        type: GET_COUNTRY,
        payload: response.data,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function getCountryById(id) {
  try {
    return async function (dispatch) {
      let response = await axios.get(`${URL}/countries/${id}`);
      return dispatch({
        type: GET_COUNTRY_ID,
        payload: response.data,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function getCountryByName(name) {
  try {
    return async function (dispatch) {
      let response = await axios.get(`${URL}/countries/detail/${name}`);
      return dispatch({
        type: GET_COUNTRY_NAME,
        payload: response.data,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function addActivity(activity) {
  try {
    return async function (dispatch) {
      await axios.post(`${URL}/activity`, activity);
      return dispatch({
        type: ADD_ACTIVITY,
        payload: activity,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function getActivity() {
  try {
    return async function (dispatch) {
      let response = await axios.get(`${URL}/activity`);
      return dispatch({
        type: GET_ACTIVITY,
        payload: response.data,
      });
    };
    // eslint-disable-next-line
  } catch (error) {
    throw new Error(error.message);
  }
}

export function filter(filter) {
  return {
    type: FILTER_ACTIVITY,
    payload: filter,
  };
}

export function resetFilter() {
  return {
    type: RESET_FILTER,
  };
}

export function orderName(id) {
  return {
    type: ORDER_NAME,
    payload: id,
  };
}

export function orderPopulation(id) {
  return {
    type: ORDER_POPULATION,
    payload: id,
  };
}

export function paginate(n) {
  return {
    type: PAGINATE,
    payload: n,
  };
}



