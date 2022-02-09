import * as t from '../types'
import axios from 'axios'

const API_URL = 'http://x3mart.ru'

export const load_user = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `JWT ${localStorage.getItem('access')}`,
        Accept: 'application/json',
      },
    }

    function parseJwt(token) {
      var base64Url = token.split('.')[1]
      var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split('')
          .map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
          })
          .join('')
      )

      return JSON.parse(jsonPayload)
    }

    const user = parseJwt(localStorage.getItem('access')).user_status

    try {
      const res = await axios.get(`${API_URL}/api/${user}/me/`, config)
      const data = {
        data: res.data,
        status: user,
      }

      dispatch({
        type: t.USER_LOADED_SUCCESS,
        payload: data,
      })
    } catch (err) {
      dispatch({
        type: t.USER_LOADED_FAIL,
      })
    }
  } else {
    dispatch({
      type: t.USER_LOADED_FAIL,
    })
  }
}

export const signUp = (status, data) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${API_URL}/api/${status}/`, body, config)

    console.log(res)

    dispatch({
      type: t.SIGNUP_SUCCESS,
      // payload: res.status
    })
  } catch (err) {
    dispatch({
      type: t.SIGNUP_FAIL,
    })
  }
}

export const login = data => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify(data)

  try {
    const res = await axios.post(`${API_URL}/auth/jwt/create/`, body, config)

    dispatch({
      type: t.LOGIN_SUCCESS,
      payload: res.data,
    })

    dispatch(load_user())
  } catch (err) {
    dispatch({
      type: t.LOGIN_FAIL,
    })
  }
}

export const checkAuthenticated = () => async dispatch => {
  if (localStorage.getItem('access')) {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }

    const body = JSON.stringify({ token: localStorage.getItem('access') })

    try {
      const res = await axios.post(`${API_URL}/auth/jwt/verify/`, body, config)

      if (res.data.code !== 'token_not_valid') {
        dispatch({
          type: t.AUTHENTICATED_SUCCESS,
        })
      } else {
        dispatch({
          type: t.AUTHENTICATED_FAIL,
        })
      }
    } catch (err) {
      dispatch({
        type: t.AUTHENTICATED_FAIL,
      })
    }
  } else {
    dispatch({
      type: t.AUTHENTICATED_FAIL,
    })
  }
}

export const logout = () => dispatch => {
  dispatch({
    type: t.LOGOUT,
  })
}

export const reset_password = email => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const body = JSON.stringify({ email })

  try {
    await axios.post(`${API_URL}/auth/users/reset_password/`, body, config)

    dispatch({
      type: t.PASSWORD_RESET_SUCCESS,
    })
  } catch (err) {
    dispatch({
      type: t.PASSWORD_RESET_FAIL,
    })
  }
}

export const reset_password_confirm =
  (uid, token, new_password, re_new_password) => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const body = JSON.stringify({ uid, token, new_password, re_new_password })

    try {
      await axios.post(
        `${API_URL}/auth/users/reset_password_confirm/`,
        body,
        config
      )

      dispatch({
        type: t.PASSWORD_RESET_CONFIRM_SUCCESS,
      })
    } catch (err) {
      dispatch({
        type: t.PASSWORD_RESET_CONFIRM_FAIL,
      })
    }
  }

export const setPage = title => dispatch => {
  dispatch({
    type: t.SET_PAGE,
    payload: title,
  })
}
