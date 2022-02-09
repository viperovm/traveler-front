import * as t from '../types'

const getLocalStorage = data => {
  if (typeof window !== 'undefined') {
    return localStorage.getItem(data)
  }
}

const setLocalStorage = (key, data) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem(key, data)
  }
}

const removeLocalStorage = (data) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(data)
  }
}


const initialState = {
  reg_status: null,
  access: getLocalStorage('access'),
  refresh: getLocalStorage('refresh'),
  isAuthenticated: null,
  user: null,
  status: '',
  page: '',
}

const authReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.AUTHENTICATED_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
      }
    case t.LOGIN_SUCCESS:
      setLocalStorage('access', payload.access)
      setLocalStorage('refresh', payload.refresh)
      return {
        ...state,
        isAuthenticated: true,
        access: payload.access,
        refresh: payload.refresh,
      }
    case t.USER_LOADED_SUCCESS:
      return {
        ...state,
        user: payload.data,
        status: payload.status,
        isAuthenticated: true,
      }
    case t.SIGNUP_SUCCESS:
      return {
        ...state,
        reg_status: payload,
        isAuthenticated: true,
      }
    case t.SET_PAGE:
      return {
        ...state,
        page: payload,
      }
    case t.LOGOUT:
      removeLocalStorage('access')
      removeLocalStorage('refresh')
      return {
        ...state,
        access: null,
        refresh: null,
        isAuthenticated: false,
        user: null,
      }
    case t.AUTHENTICATED_FAIL:
    case t.LOGIN_FAIL:
    case t.SIGNUP_FAIL:
    case t.USER_LOADED_FAIL:
      return {
        ...state,
      }
    default:
      return state
  }
}

export default authReducer
