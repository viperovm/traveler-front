import * as t from '../types'

const initialState = {
  common: {},
  prices: {},
  options: {},
  details: {},
  day: [],
  leader: {},
  conditions: {},
  services: {},
  important: {},
  photos: [],
}

const addTourSectionsReducer = (state = initialState, action) => {
  const { type, payload } = action

  const setData = (state, data) => {
      return { ...state, data }
  }

  switch (type) {
    case t.HANDLE_COMMON_SECTION:
      return {
        ...state,
        common: setData(state.common, payload),
      }
    case t.HANDLE_PRICES_SECTION:
      return {
        ...state,
        prices: setData(state.prices, payload),
      }
    case t.HANDLE_OPTIONS_SECTION:
      return {
        ...state,
        options: setData(state.options, payload),
      }
    case t.HANDLE_DETAILS_SECTION:
      return {
        ...state,
        details: setData(state.details, payload),
      }
    case t.HANDLE_DAY_SECTION:
      return {
        ...state,
        day: setData(state.day, payload),
      }
    case t.HANDLE_LEADER_SECTION:
      return {
        ...state,
        leader: setData(state.leader, payload),
      }
    case t.HANDLE_CONDITIONS_SECTION:
      return {
        ...state,
        conditions: setData(state.conditions, payload),
      }
    case t.HANDLE_SERVICES_SECTION:
      return {
        ...state,
        services: setData(state.services, payload),
      }
    case t.HANDLE_IMPORTANT_SECTION:
      return {
        ...state,
        important: setData(state.important, payload),
      }
    case t.HANDLE_PHOTOS_SECTION:
      return {
        ...state,
        photos: setData(state.photos, payload),
      }


    default:
      return state
  }
}

export default addTourSectionsReducer
