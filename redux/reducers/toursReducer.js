import {
  GET_TOUR_TYPES_SUCCESS,
  GET_TOUR_TYPES_FAIL,
  ADD_TOUR_SUCCESS,
  ADD_TOUR_FAIL,
  UPDATE_TOUR_SUCCESS,
  UPDATE_TOUR_FAIL,
  GET_REGIONS_SUCCESS,
  GET_REGIONS_FAIL,
  GET_START_COUNTRIES_SUCCESS,
  GET_FINISH_COUNTRIES_SUCCESS,
  GET_COUNTRIES_FAIL,
  GET_START_RUSSIAN_REGIONS_SUCCESS,
  GET_FINISH_RUSSIAN_REGIONS_SUCCESS,
  GET_RUSSIAN_REGIONS_FAIL,
  GET_START_CITIES_SUCCESS,
  GET_FINISH_CITIES_SUCCESS,
  GET_CITIES_FAIL,
  GET_TOUR_SUCCESS,
  GET_TOUR_FAIL,
  CLEAR_CURRENT_TOUR,
  CLEAR_CURRENT_TOUR_FAIL,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_FAIL,
  GET_LANGUAGES_SUCCESS,
  GET_LANGUAGES_FAIL,
  SET_PROPERTY_IMAGE_SUCCESS,
  SET_PROPERTY_IMAGE_FAIL,
  SET_TOUR_DAY_IMAGE_SUCCESS,
  SET_TOUR_DAY_IMAGE_FAIL,
  ADD_DAY_SUCCESS,
  ADD_DAY_FAIL,
  SET_TOUR_IMAGE_SUCCESS,
  SET_TOUR_IMAGE_FAIL,
  GET_TOURS_SUCCESS,
  GET_TOURS_FAIL,
  ADD_ACTIVITY_SUCCESS,
  ADD_ACTIVITY_FAIL,
  UPDATE_ACTIVITY_SUCCESS,
  UPDATE_ACTIVITY_FAIL,
} from '../types'

const initialState = {
  tours: [],
  tour_types: [],
  currencies: [],
  languages: [],
  regions: [],
  start_countries: [],
  start_russian_regions: [],
  start_cities: [],
  finish_countries: [],
  finish_russian_regions: [],
  finish_cities: [],
}

const toursReducer = (state = initialState, action) => {
  const { type, payload } = action

  const setPropertyImages = (tour, image) => {
    let arr = [...tour.tour_property_images]
    arr.push(image)
    tour = {
      ...tour,
      tour_property_images: arr,
    }
    return tour
  }
  const setTourImages = (tour, image) => {
    let arr = [...tour.tour_images]
    arr.push(image)
    tour = {
      ...tour,
      tour_images: arr,
    }
    return tour
  }
  const setDay = (tour, day) => {
    let arr = [...tour.tour_days]
    arr.push(day)
    tour = {
      ...tour,
      tour_days: arr,
    }
    return tour
  }

  switch (type) {
    case GET_TOURS_SUCCESS:
      return {
        ...state,
        tours: payload,
      }
    case GET_TOUR_TYPES_SUCCESS:
      return {
        ...state,
        tour_types: payload,
      }
    case UPDATE_TOUR_FAIL:
    case CLEAR_CURRENT_TOUR_FAIL:
      return {
        ...state,
      }

    case GET_CURRENCIES_SUCCESS:
      return {
        ...state,
        currencies: payload,
      }
    case GET_CURRENCIES_FAIL:
      return {
        ...state,
        currencies: [],
      }
    case GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: payload,
      }
    case GET_LANGUAGES_FAIL:
      return {
        ...state,
        languages: [],
      }
    case SET_PROPERTY_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setPropertyImages(state.current_tour, payload),
      }
    case SET_PROPERTY_IMAGE_FAIL:
      return {
        ...state,
      }
    case SET_TOUR_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setTourImages(state.current_tour, payload),
      }
    case SET_TOUR_IMAGE_FAIL:
      return {
        ...state,
      }
    case ADD_DAY_SUCCESS:
      return {
        ...state,
        current_tour: setDay(state.current_tour, payload),
      }
    case ADD_DAY_FAIL:
      return {
        ...state,
      }
    case SET_TOUR_DAY_IMAGE_SUCCESS:
      return {
        ...state,
        // current_tour: payload,
      }
    case SET_TOUR_DAY_IMAGE_FAIL:
      return {
        ...state,
      }

    case GET_REGIONS_SUCCESS:
      return {
        ...state,
        regions: payload,
      }

    case GET_START_COUNTRIES_SUCCESS:
      return {
        ...state,
        start_countries: payload,
      }
    case GET_START_RUSSIAN_REGIONS_SUCCESS:
      return {
        ...state,
        start_russian_regions: payload,
      }
    case GET_START_CITIES_SUCCESS:
      return {
        ...state,
        start_cities: payload,
      }

    case GET_FINISH_COUNTRIES_SUCCESS:
      return {
        ...state,
        finish_countries: payload,
      }
    case GET_FINISH_RUSSIAN_REGIONS_SUCCESS:
      return {
        ...state,
        finish_russian_regions: payload,
      }
    case GET_FINISH_CITIES_SUCCESS:
      return {
        ...state,
        finish_cities: payload,
      }

    case GET_REGIONS_FAIL:
      return {
        ...state,
        regions: [],
      }
    case GET_COUNTRIES_FAIL:
      return {
        ...state,
        countries: [],
      }
    case GET_RUSSIAN_REGIONS_FAIL:
      return {
        ...state,
        russian_regions: [],
      }
    case GET_CITIES_FAIL:
      return {
        ...state,
        cities: [],
      }
    // case ZEROING_DATA:
    //   return {
    //     ...state,
    //     current_tour: {},
    //   }

    default:
      return state
  }
}

export default toursReducer
