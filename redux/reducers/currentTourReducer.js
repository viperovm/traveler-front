import * as t from '../types'

const initialState = {
  tour:
  {accomodation: null,
  additional_types: [],
  age_ends: null,
  age_starts: null,
  animals_not_exploited: false,
  babies_alowed: false,
  basic_type: null,
  cancellation_terms: null,
  comfort_level: 1,
  cost: null,
  currency: null,
  description: null,
  difficulty_description: null,
  difficulty_level: 1,
  direct_link: false,
  discount: null,
  expert: null,
  finish_city: null,
  finish_country: null,
  finish_date: null,
  finish_region: null,
  finish_russian_region: null,
  finish_time: '',
  flight_included: false,
  hotel_name: null,
  id: null,
  instant_booking: false,
  is_guaranteed: false,
  languages: [],
  main_impressions: [],
  media_link: null,
  members_number: 0,
  name: '',
  plan: null,
  postpay_days_before_start: null,
  postpay_on_start_day: false,
  prepay_amount: null,
  prepay_currency: null,
  prepay_finish: null,
  prepay_in_prc: true,
  prepay_starts: null,
  price: null,
  price_comment: null,
  rating: null,
  reviews_count: 0,
  scouting: false,
  start_city: null,
  start_country: null,
  start_date: null,
  start_region: null,
  start_russian_region: null,
  start_time: '',
  team_member: null,
  tour_days: [],
  tour_excluded_services: [],
  tour_images: [],
  tour_included_services: [],
  tour_property_images: [],
  tour_property_types: [],
  wallpaper: null,}
}

const currentTourReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.UPDATE_CURRENT_TOUR:
      return {
        ...state,
        tour: {
          ...state.tour,
          [payload.name]: payload.value,
        },
      }
    
    default:
      return state
  }
}

export default currentTourReducer
