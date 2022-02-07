import * as t from '../types'

const initialState = {
  tour_types: [],
}

const toursReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.GET_TOUR_TYPES_SUCCESS:
      return {
        ...state,
        tour_types: payload,
      }
    
    default:
      return state
  }
}

export default toursReducer
