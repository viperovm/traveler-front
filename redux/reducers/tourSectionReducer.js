import * as t from '../types'

const initialState = {
  tour_id: '',
  tour_name: '',
  current_section: 'common',
  active_sections: [],
  secondary_nav: [
    { value: 'common', text: 'Общее', active: false },
    { value: 'prices', text: 'Цены и даты', active: false },
    { value: 'options', text: 'Условия отмены', active: false },
    { value: 'details', text: 'Детали', active: false },
    { value: 'day', text: 'День за днем', active: false },
    { value: 'leader', text: 'Турлидер', active: false },
    { value: 'conditions', text: 'Условия', active: false },
    { value: 'services', text: 'Доп. услуги', active: false },
    { value: 'important', text: 'Важно знать', active: false },
    { value: 'photos', text: 'Фотографии', active: false },
  ],
  secondary: false,
  remote_data: [],
}

const tourSectionReducer = (state = initialState, action) => {
  const { type, payload } = action

  switch (type) {
    case t.SET_TOUR_ID:
      return {
        ...state,
        tour_id: payload,
      }
    case t.SET_TOUR_NAME:
      return {
        ...state,
        tour_name: payload,
      }
    case t.SET_CURRENT_SECTION:
      return {
        ...state,
        current_section: payload,
      }
    case t.SET_ACTIVE_SECTION:
      return {
        ...state,
        active_sections: payload,
      }
    case t.DELETE_ACTIVE_SECTION:
      return {
        ...state,
        active_sections: state.active_sections.filter(item => item !== payload),
      }
    case t.SET_SECONDARY_NAV:
      return {
        ...state,
        secondary_nav: payload,
      }
    case t.GET_REMOTE_DATA_SUCCESS:
      return {
        ...state,
        remote_data: payload,
      }
    case t.GET_REMOTE_DATA_FAIL:
      return {
        ...state,
        remote_data: [],
      }
    case t.OPEN_SECONDARY_MENU:
      return {
        ...state,
        secondary: payload,
      }
    case t.ZEROING_DATA:
      return {
        ...state,
        tour_id: '',
        tour_name: '',
        current_section: 'common',
        active_sections: [],
        secondary_nav: [
          { value: 'common', text: 'Общее', active: false },
          { value: 'prices', text: 'Цены и даты', active: false },
          { value: 'options', text: 'Условия отмены', active: false },
          { value: 'details', text: 'Детали', active: false },
          { value: 'day', text: 'День за днем', active: false },
          { value: 'leader', text: 'Турлидер', active: false },
          { value: 'conditions', text: 'Условия', active: false },
          { value: 'services', text: 'Доп. услуги', active: false },
          { value: 'important', text: 'Важно знать', active: false },
          { value: 'photos', text: 'Фотографии', active: false },
        ],
        remote_data: [],
      }

    default:
      return state
  }
}

export default tourSectionReducer
