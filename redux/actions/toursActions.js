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
