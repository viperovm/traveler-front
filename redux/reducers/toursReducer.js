import * as t from '../types'

const initialState = {
  current_tour: {},
  tour_types: [],
  regions: [],
  countries: [],
  russian_regions: [],
  cities: [],
  currencies: [],
  languages: [],
}



const toursReducer = (state = initialState, action) => {
  const { type, payload } = action

  const setPropertyImages = (tour, image) => {
    let arr = [...tour.tour_property_images]
    arr.push(image)
    tour = {
      ...tour,
      tour_property_images: arr
    }
    return tour
  }
  const setTourImages = (tour, image) => {
    let arr = [...tour.tour_images]
    arr.push(image)
    tour = {
      ...tour,
      tour_images: arr
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
    case t.GET_TOUR_TYPES_SUCCESS:
      return {
        ...state,
        tour_types: payload,
      }
    case t.ADD_TOUR_SUCCESS:
    case t.UPDATE_TOUR_SUCCESS:
    case t.GET_TOUR_SUCCESS:
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
    case t.GET_LANGUAGES_SUCCESS:
      return {
        ...state,
        languages: payload,
      }
    case t.GET_LANGUAGES_FAIL:
      return {
        ...state,
        languages: [],
      }
    case t.SET_PROPERTY_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setPropertyImages(state.current_tour, payload),
      }
    case t.SET_PROPERTY_IMAGE_FAIL:
      return {
        ...state,
      }
    case t.SET_TOUR_IMAGE_SUCCESS:
      return {
        ...state,
        current_tour: setTourImages(state.current_tour, payload),
      }
    case t.SET_TOUR_IMAGE_FAIL:
      return {
        ...state,
      }
    case t.ADD_DAY_SUCCESS:
      return {
        ...state,
        current_tour: setDay(state.current_tour, payload),
      }
    case t.ADD_DAY_FAIL:
      return {
        ...state,
      }
    case t.SET_TOUR_DAY_IMAGE_SUCCESS:
      return {
        ...state,
        // current_tour: payload,
      }
    case t.SET_TOUR_DAY_IMAGE_FAIL:
      return {
        ...state,
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
