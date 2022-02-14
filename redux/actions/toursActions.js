import * as t from '../types'
import axios from 'axios'

const API_URL = 'http://x3mart.ru'

// export const load_user = () => async dispatch => {
//   if (localStorage.getItem('access')) {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `JWT ${localStorage.getItem('access')}`,
//         Accept: 'application/json',
//       },
//     }

//     try {
//       const res = await axios.get(`${API_URL}/auth/users/me/`, config)

//       dispatch({
//         type: t.USER_LOADED_SUCCESS,
//         payload: res.data,
//       })
//     } catch (err) {
//       dispatch({
//         type: t.USER_LOADED_FAIL,
//       })
//     }
//   } else {
//     dispatch({
//       type: t.USER_LOADED_FAIL,
//     })
//   }
// }

export const getTourTypes = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/tourtypes/`, config)

    dispatch({
      type: t.GET_TOUR_TYPES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_TOUR_TYPES_FAIL,
    })
  }
}

export const getRegions = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/regions/`, config)

    dispatch({
      type: t.GET_REGIONS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_REGIONS_FAIL,
    })
  }
}

export const getCountries = region_id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(
      `${API_URL}/api/countries/?region=${region_id}`,
      config
    )

    dispatch({
      type: t.GET_COUNTRIES_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_COUNTRIES_FAIL,
    })
  }
}

export const getRussianRegions = () => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  try {
    const res = await axios.get(`${API_URL}/api/russianregions/`, config)

    dispatch({
      type: t.GET_RUSSIAN_REGIONS_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_RUSSIAN_REGIONS_FAIL,
    })
  }
}

export const getCities =
  (country_id, russian_region = false) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    const request = `?country=${country_id}${
      russian_region ? '&russian_region=' + russian_region : ''
    }`

    try {
      const res = await axios.get(`${API_URL}/api/cities/${request}`, config)

      dispatch({
        type: t.GET_CITIES_SUCCESS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: t.GET_CITIES_FAIL,
      })
    }
  }

export const addTour = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${API_URL}/api/tours/`, config, body)

    dispatch({
      type: t.ADD_TOUR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.ADD_TOUR_FAIL,
    })
  }
}

export const updateTour = (data, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `JWT ${localStorage.getItem('access')}`,
      Accept: 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.patch(`${API_URL}/api/tours/${id}/`, config)

    dispatch({
      type: t.UPDATE_TOUR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.UPDATE_TOUR_FAIL,
    })
  }
}
