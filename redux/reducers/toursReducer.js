import * as t from '../types'

const initialState = {
  current_tour: {},
  tour_types: [],
  regions: [],
  countries: [],
  russian_regions: [],
  cities: [],
  currencies: [],
}

const toursReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.GET_TOUR_TYPES_SUCCESS:
      return {
        ...state,
        tour_types: payload,
      }
    case t.ADD_TOUR_SUCCESS:
    case t.UPDATE_TOUR_SUCCESS:
      return {
        ...state,
        current_tour: payload,
      }
    case t.UPDATE_TOUR_FAIL:
    case t.CLEAR_CURRENT_TOUR_FAIL:
      return {
        ...state,
      }
    case t.CLEAR_CURRENT_TOUR:
    case t.ADD_TOUR_FAIL:
      return {
        ...state,
        current_tour: {},
      }
    case t.ADD_TOUR_SUCCESS:
      return {
        ...state,
        current_tour: payload,
      }
    case t.GET_TOUR_SUCCESS:
      return {
        ...state,
        current_tour: payload,
      }
    case t.GET_TOUR_FAIL:
      return {
        ...state,
        current_tour: {},
      }
    case t.GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: payload,
      }
    case t.GET_CURRENCIES_FAIL:
      return {
        ...state,
        currencies: [],
      }

    case t.GET_REGIONS_SUCCESS:
      return {
        ...state,
        regions: payload,
      }
    case t.GET_COUNTRIES_SUCCESS:
      return {
        ...state,
        countries: payload,
      }
    case t.GET_RUSSIAN_REGIONS_SUCCESS:
      return {
        ...state,
        russian_regions: payload,
      }
    case t.GET_CITIES_SUCCESS:
      return {
        ...state,
        cities: payload,
      }
    case t.GET_REGIONS_FAIL:
      return {
        ...state,
        regions: [],
      }
    case t.GET_COUNTRIES_FAIL:
      return {
        ...state,
        countries: [],
      }
    case t.GET_RUSSIAN_REGIONS_FAIL:
      return {
        ...state,
        russian_regions: [],
      }
    case t.GET_CITIES_FAIL:
      return {
        ...state,
        cities: [],
      }
    case t.ZEROING_DATA:
      return {
        ...state,
        current_tour: {},
      }

    default:
      return state
  }
}

export default toursReducer
