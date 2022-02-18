import * as t from '../types'
import axios from 'axios'

const API_URL = 'http://x3mart.ru'

export const addTour = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
      'Accept': 'application/json'
    }
  };

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${API_URL}/api/tours/`, body, config)

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

export const getTour = id => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
      'Accept': 'application/json'
    }
  };

  try {
    const res = await axios.get(`${API_URL}/api/tours/${id}`, config)

    dispatch({
      type: t.GET_TOUR_SUCCESS,
      payload: res.data,
    })
  } catch (err) {
    dispatch({
      type: t.GET_TOUR_FAIL,
    })
  }
}

export const updateTour = (data, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
      'Accept': 'application/json'
    }
  };

  const body = JSON.stringify(data)

  try {
    const res = await axios.patch(`${API_URL}/api/tours/${id}/`, body, config)

    dispatch({
      type: t.UPDATE_TOUR_SUCCESS,
      payload: res.data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: t.UPDATE_TOUR_FAIL,
    })
  }
}

export const addDay = (id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
      'Accept': 'application/json',
    },
  }

  const body = JSON.stringify({tour: id})

  try {
    const res = await axios.post(`${API_URL}/api/tourdays/`, body, config)

    dispatch({
      type: t.ADD_DAY_SUCCESS,
      payload: res.data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: t.ADD_DAY_FAIL,
    })
  }
}

export const updateTourWallpaper = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
    },
  }


  let form_data = new FormData()

  form_data.append('wallpaper', image, image.name)

  try {
    const res = await axios.patch(
      `${API_URL}/api/tours/${id}/`,
      form_data,
      config
    )

    dispatch({
      type: t.UPDATE_TOUR_SUCCESS,
      payload: res.data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: t.UPDATE_TOUR_FAIL,
    })
  }
}

export const setPropertyImage = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
    },
  }
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  form_data.append('tour', id)
  try {
    const res = await axios.post(
      `${API_URL}/api/tourpropertyimages/`,
      form_data,
      config
    )

    console.log(res.data)

    dispatch({
      type: t.SET_PROPERTY_IMAGE_SUCCESS,
      payload: res.data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: t.SET_PROPERTY_IMAGE_FAIL,
    })
  }
}

export const setDayImage = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
    },
  }
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  form_data.append('tour_day', id)
  try {
    const res = await axios.post(
      `${API_URL}/api/tourdayimages/`,
      form_data,
      config
    )

    dispatch({
      type: t.SET_TOUR_DAY_IMAGE_SUCCESS,
      payload: res.data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: t.SET_TOUR_DAY_IMAGE_FAIL,
    })
  }
}

export const setTourImages = (image, id) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `JWT ${localStorage.getItem('access')}`,
    },
  }
  let form_data = new FormData()
  form_data.append('image', image, image.name)
  form_data.append('tour', id)
  try {
    const res = await axios.post(
      `${API_URL}/api/tourimages/`,
      form_data,
      config
    )

    dispatch({
      type: t.SET_TOUR_IMAGE_SUCCESS,
      payload: res.data,
    })
    // dispatch(getTour(id))
  } catch (err) {
    dispatch({
      type: t.SET_TOUR_IMAGE_FAIL,
    })
  }
}


// export const setReview = ({phone_number, attributes, body}) => async dispatch => {
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `JWT ${localStorage.getItem('access')}`,
//       'Accept': 'application/json'
//     }
//   };

//   const content = JSON.stringify({ phone_number, attributes, body })

//   try {
//     const res = await axios.post(
//       `${process.env.REACT_APP_API_URL}/api/reviews/`,
//       content,
//       config
//     )

//     dispatch({
//       type: SET_REVIEW_SUCCESS,
//       payload: res.status
//     });
//   } catch (err) {
//     dispatch({
//       type: SET_REVIEW_FAIL,
//       payload: err.response.data.error,
//     })
//   }
// };

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

export const getCurrencies = () =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json',
      },
    }

    try {
      const res = await axios.get(
        `${API_URL}/api/currencies/`,
        config
      )


      dispatch({
        type: t.GET_CURRENCIES_SUCCESS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: t.GET_CURRENCIES_FAIL,
      })
    }
  }

export const getLanguages = () =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `JWT ${localStorage.getItem('access')}`,
        'Accept': 'application/json',
      },
    }

    try {
      const res = await axios.get(`${API_URL}/api/languages/`, config)


      dispatch({
        type: t.GET_LANGUAGES_SUCCESS,
        payload: res.data,
      })
    } catch (err) {
      dispatch({
        type: t.GET_LANGUAGES_FAIL,
      })
    }
  }

  export const clearCurrentTour = (id) => async dispatch => {
     const config = {
       headers: {
         'Content-Type': 'application/json',
         'Authorization': `JWT ${localStorage.getItem('access')}`,
         'Accept': 'application/json',
       },
     }

     try {
       const res = await axios.delete(`${API_URL}/api/tours/${id}`, config)

       dispatch({
         type: t.CLEAR_CURRENT_TOUR,
       })
     } catch (err) {
       dispatch({
         type: t.CLEAR_CURRENT_TOUR_FAIL,
       })
     }
  }

