import * as t from '../types'

const initialState = {
  tour: {}
}

const currentTourReducer = (state = initialState, action) => {
  const { type, payload } = action

  const setTourData = (state, name, data) => {
    return {
      ...state,
      [name]: data,
    }
  }

  switch (type) {
    case t.SET_CURRENT_TOUR:
      return {
        ...state,
        tour: payload,
      }
    case t.UPDATE_CURRENT_TOUR:
      return {
        ...state,
        tour: setTourData(state.tour, payload.name, payload.value),
      }
    case t.CLEAR_TOUR:
      return {
        ...state,
        tour: {},
      }

    default:
      return state
  }
}

export default currentTourReducer
